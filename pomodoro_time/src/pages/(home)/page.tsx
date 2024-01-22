import { ArrowBigRightDash } from "lucide-react";
import {
  FormContainer,
  FormContentTime,
  HomeContainer,
  MinuteInput,
  SecondTimeSpace,
  StartButton,
  TaskInput,
} from "./styled";

import { useForm } from "react-hook-form";

export const Home = () => {
  const {
    handleSubmit,
    register,
    // reset,
    watch,
    // formState: { errors },
  } = useForm({});

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {};
  const taks = watch("task");

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            list="task_options"
            placeholder="Digite o nome da tarefa"
            {...register("task")}
          />
          <datalist id="task_options">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="timeAmount">durante</label>
          <MinuteInput
            id="timeAmount"
            placeholder="00"
            type="number"
            step="5"
            max={60}
            min={0}
            {...register("timeAmount")}
          />
          <span>minutos.</span>
        </FormContainer>

        <FormContentTime>
          <span>0</span>
          <span>0</span>
          <SecondTimeSpace>:</SecondTimeSpace>
          <span>0</span>
          <span>0</span>
        </FormContentTime>
        {/* btn disabled */}
        <StartButton disabled title="Começar tarefa" type="submit">
          <ArrowBigRightDash size={19} />
          Começar
        </StartButton>
      </form>
    </HomeContainer>
  );
};
