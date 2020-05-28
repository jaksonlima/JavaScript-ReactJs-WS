import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import history from "../../services/history";

import { Container, Time } from "./styles";
import api from "../../services/api";

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default function Deshboard() {
  const [schedule, setSchedules] = useState([]);
  const [date, setDate] = useState(new Date());
  const [pedidos, setPedidos] = useState([]);

  const dataFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("schedules");

      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timeZone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) => {
            isEqual(parseISO(a.date), compareDate);
          }),
        };
      });

      setSchedules(data);
    }

    loadSchedule();
  }, [date]);

  const ped = useSelector((state) => state.cadastroPedido);

  useEffect(() => {
    setPedidos(ped);
  }, [pedidos]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handledRedirectCadastro() {
    return history.push("/cadastro");
  }

  return (
    <Container>
      <div>
        <h1>Novo Pedido</h1>
        <button onClick={handledRedirectCadastro}>
          <AiFillPlusCircle size={"30px"} color={"#fff"} />
        </button>
      </div>

      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dataFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : "Em aberto"}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
