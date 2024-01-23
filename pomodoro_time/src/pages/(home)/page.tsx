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
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { useForm } from "react-hook-form";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  timeAmount: zod.number().min(5).max(60),
});

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export const Home = () => {
  const { handleSubmit, register, reset, watch } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      timeAmount: 5,
    },
  });

  const handleSubmitForm = (data: newCycleFormData) => {
    console.log(data);
    reset();
  };

  const taks = watch("task");
  const isSubmitDisabled = !taks;

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
            min={5}
            max={60}
            {...register("timeAmount", { valueAsNumber: true })}
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
        <StartButton
          disabled={isSubmitDisabled}
          title="Começar tarefa"
          type="submit"
        >
          <ArrowBigRightDash size={19} />
          Começar
        </StartButton>
      </form>
    </HomeContainer>
  );
};
