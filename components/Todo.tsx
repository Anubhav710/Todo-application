import React from "react"

interface TodoData {
  store: string
}

const Todo = ({ data, deleteData }: any) => {
  return (
    <div className="w-full bg-slate-100 h-16 rounded-md font-medium flex justify-between px-7 mt-3 shadow-sm">
      <div className="flex justify-between w-full items-center ">
        {data}
        <div>
          <button
            className="bg-red-400 px-2 py-1 text-white rounded-md"
            onClick={deleteData}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
