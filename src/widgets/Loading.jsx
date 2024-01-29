import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <h2 className="text-center text-gray-700 text-xl font-semibold">Loading...</h2>
        </div>
      );
    
}

export default Loading