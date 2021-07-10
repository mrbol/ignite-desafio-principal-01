import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({} as Task);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task

    if (tasks.find(p => p.title === newTaskTitle)) {
      Alert.alert('valor encontrado', 'Verifique o nome informado');
      return;
    }

    const newTask = {

    } as Task;


    if (!!newTaskTitle) {
      newTask.id = new Date().getTime();
      newTask.title = newTaskTitle;
      newTask.done = false;
      setTasks([...tasks, newTask]);

    }
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists

    /*
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
    */

    const atualizarTarefa = tasks.map(task => ({ ...task }))
    const item = atualizarTarefa.find(p => p.id === id);

    if (item != null) {
      item.done = !item.done;
      setTasks(atualizarTarefa);
    }


  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const novaLiata = tasks.filter(p => p.id != id);

    setTasks(novaLiata);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})