const RightOverlayContent = ({ isAnimated, setIsAnimated }) => {
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
        New faculty ? Welcome aboard!
        </h1>
  
        <h5 className="text-xl text-white"> Click here to create your account.</h5>
        <div className="mt-16">
          <button
            className="py-3 px-6 bg-transparent rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
            onClick={(e) => {
              setIsAnimated(!isAnimated);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };
  
  export default RightOverlayContent;