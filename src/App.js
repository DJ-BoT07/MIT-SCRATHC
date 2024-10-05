import React from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './components/redux/rootReducer';
import MidArea from "./components/MidArea";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PreviewArea from "./components/PreviewArea";

const store = createStore(rootReducer);

export default function App() {
  const onDragEnd = (result) => {
    // Handle drag end logic here
  };

  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="bg-blue-100 pt-0 font-sans">
          <Navbar />
          <div className="h-screen pt-2 overflow-hidden flex flex-row  ">
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar />
              <MidArea />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea />
            </div>
          </div>
        </div>
      </DragDropContext>
    </Provider>
  );
}
