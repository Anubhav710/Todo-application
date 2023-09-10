"use client"
import Todo from "@/components/Todo"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  const [store, setStore] = useState<string[]>([])

  const handleSubmit = () => {
    setStore([...store, text])
    setText("") // Clear the input field after adding a task
  }
  const deleteHandler = (index: number) => {
    let copyArray = [...store]
    copyArray.splice(index, 1)
    setStore(copyArray)
  }

  return (
    <main className="bg-purple-600 flex justify-center items-center w-full h-full">
      {/* Creating Todo List Container */}
      <div className="h-[40rem] w-[30rem] md:h-[40rem] md:w-[30rem] bg-white shadow-2xl rounded-md">
        <h1 className="text-5xl font-bold flex justify-center mt-4 text-purple-600">
          TODO LIST
        </h1>
        {/* Input and Button */}
        <div className="w-full m-5 flex justify-center gap-4">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Enter your task here"
            className="border border-purple-600 p-2 rounded-md focus:border-red-600"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-purple-600 px-6 py-4 rounded-md text-white"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
        {/* Store */}
        <div className="h-full border-t border-purple-800/2 mt-3 p-5">
          {store.map((item: string, index: number) => (
            <div key={index}>
              <Todo data={item} deleteData={() => deleteHandler(index)} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
