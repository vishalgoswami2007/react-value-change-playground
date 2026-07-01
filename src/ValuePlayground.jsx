import { useState } from "react";

function ValuePlayground() {
  // ✅ STATES yaha banengi

  // 1. Counter - solved example
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [Rating, setRating] = useState(0)
  const [Progress, setProgress] = useState(0)
  const [Size, setSize] = useState(0)
  const [Zoom, setZoom] = useState(0)
  const [Brightness , setBrightness] = useState(0)
  const [Volume ,  setVolume] = useState(0)
  const [Opacity, setOpacity] = useState(0)
  const [ImageSize , setImageSize] = useState(120)


  function increaseCount() {
    setCount(count + 1);
  } 

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }

  function increaseRate() {
    setRating( Rating + 1);
  }

  function increaseProgress(){
    setProgress(Progress +10);
  }

  function decreaseProgress(){
    setProgress(Progress -10);
  }

  function increaseSize() {
    setSize(Size +1)
  }

   function decreaseSize() {
    setSize(Size -1)
  }

  function increaseZoom(){
    setZoom(Zoom +1)
  }

  function decreaseZoom(){
    setZoom(Zoom -1)
  }

  function increaseBrightness(){
    setBrightness(Brightness +1)
  }

  function decreaseBrightness(){
    setBrightness(Brightness -1)
  }

  function decreaseVolume(){
    setVolume(Volume -1)
  }

  function IncreaseVolume(){
    setVolume(Volume +1)
  }

  function decreaseOpacity(){
    setOpacity(Opacity -1)
  }

  function IncreaseOpacity(){
    setOpacity(Opacity +1)
  }

  function decreaseImageSize(){
    setImageSize(ImageSize -1)
  }

  function increaseImageSize(){
    setImageSize(ImageSize +1)
  }
 
  return (
    <div className="min-h-screen bg-[#080812] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          React Value Change Playground
        </h1>

        <p className="text-gray-400 mb-8">
          Chapter 2: Counter, Quantity, Rating, Progress, Font Size, Zoom,
          Brightness, Volume, Opacity, Image Size
        </p>

        {/* 1. Counter - solved */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">1. Counter</h2>

          <p className="text-4xl font-bold mb-4">{count}</p>

          <div className="flex gap-3">
            <button
              onClick={decreaseCount}
              className="px-4 py-2 rounded-xl bg-red-600 text-white"
            >
              -
            </button>

            <button
              onClick={resetCount}
              className="px-4 py-2 rounded-xl bg-gray-700 text-white"
            >
              Reset
            </button>

            <button
              onClick={increaseCount}
              className="px-4 py-2 rounded-xl bg-green-600 text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* 2. Quantity */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">2. Quantity</h2>

          {/* TODO:
            state: quantity, setQuantity
            starting value: 1
            functions:
            increaseQuantity → quantity + 1
            decreaseQuantity → quantity - 1
            bonus: quantity 1 se niche na jaye
          */}

          <p className="text-4xl font-bold mb-4">{quantity}</p>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseQuantity}>
              -
            </button>

            <button className="px-4 py-2 rounded-xl bg-green-600 text-white" onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>

        {/* 3. Rating */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">3. Rating</h2>

          {/* TODO:
            state: rating, setRating
            starting value: 0
            buttons 1 to 5
            click par setRating(1), setRating(2)...
            display: Selected Rating: rating
          */}

          <p className="text-lg mb-4">Selected Rating: {Rating}</p>

          <div className="flex gap-2 text-2xl">
            <button Onclick={() => setRating(1)}>{Rating >= 1 ? "⭐" : "☆"}</button>
            <button Onclick={() => setRating(2)}>{Rating >= 2 ? "⭐" : "☆"}</button>
            <button Onclick={() => setRating(3)}>{Rating >= 3 ? "⭐" : "☆"}</button>
            <button Onclick={() => setRating(4)}>{Rating >= 4 ? "⭐" : "☆"}</button>
            <button Onclick={() => setRating(5)}>{Rating >= 5 ? "⭐" : "☆"}</button>
          </div>
        </div>

        {/* 4. Progress */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">4. Progress : {Progress}%</h2>

          {/* TODO:
            state: progress, setProgress
            starting value: 0
            +10 / -10
            bonus: 0 se niche nahi, 100 se upar nahi
          */}

          <p className="mb-3">Progress: 0%</p>

          <div className="w-full h-4 rounded-full bg-white/10 mb-4">
            <div className="h-4 rounded-full bg-purple-600" style={{ width: `${Progress}%` }} ></div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseProgress}>
              -10
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white"onClick={increaseProgress}>
              +10
            </button>
          </div>
        </div>

        {/* 5. Font Size */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">5. Font Size : {Size}</h2>

          {/* TODO:
            state: fontSize, setFontSize
            starting value: 20
            +2 / -2
            paragraph style={{ fontSize: `${fontSize}px` }}
          */} 

          <p className="mb-4" style={{ fontSize: `${Size}px` }} >This text size will change.</p>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseSize}>
              A-
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white"onClick={increaseSize}>
              A+
            </button>
          </div>
        </div>

        {/* 6. Zoom */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">6. Zoom: {Zoom}</h2>

          {/* TODO:
            state: zoom, setZoom
            starting value: 1
            +0.1 / -0.1
            box style={{ transform: `scale(${zoom})` }}
          */}

          <div className="w-24 h-24 bg-blue-600 rounded-2xl mb-4 flex items-center justify-center" style={{transform:`scale(${Zoom})`}}>
            Box
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white"onClick={decreaseZoom}>
              Zoom -
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white"onClick={increaseZoom}>
              Zoom +
            </button>
          </div>
        </div>

        {/* 7. Brightness */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">7. Brightness : {Brightness}</h2>

          {/* TODO:
            state: brightness, setBrightness
            starting value: 100
            +10 / -10
            box style={{ filter: `brightness(${brightness}%)` }}
          */}

          <div className="w-32 h-24 bg-yellow-400 rounded-2xl mb-4" style={{filter : `brightness(${Brightness}%)`}}></div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseBrightness}>
              Dim
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white" onClick={increaseBrightness}>
              Bright
            </button>
          </div>
        </div>

        {/* 8. Volume */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">8. Volume : {Volume}</h2>

          {/* TODO:
            state: volume, setVolume
            starting value: 50
            +10 / -10
            display volume
            bonus: 0 se 100 ke beech
          */}

          <p className="text-2xl font-bold mb-4">Volume: 50</p>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseVolume}>
              -
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white" onClick={IncreaseVolume}>
              +
            </button>
          </div>
        </div>

        {/* 9. Opacity */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">9. Opacity : {Opacity}</h2>

          {/* TODO:
            state: opacity, setOpacity
            starting value: 1
            +0.1 / -0.1
            box style={{ opacity: opacity }}
          */}

          <div className="w-32 h-24 bg-pink-500 rounded-2xl mb-4" style={{opacity : Opacity}}></div>

          <div className="flex gap-3" >
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseOpacity}>
              Fade
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white" onClick={IncreaseOpacity}>
              Show
            </button>
          </div>
        </div>

        {/* 10. Image Size */}
        <div className="p-5 rounded-2xl border border-white/10 mb-4">
          <h2 className="text-xl font-semibold mb-4">10. Image Size : {ImageSize}</h2>

          {/* TODO:
            state: imageSize, setImageSize
            starting value: 120
            +20 / -20
            box style={{ width: imageSize, height: imageSize }}
          */}

          <div className="bg-purple-600 rounded-2xl mb-4 flex items-center justify-center" >
            Image Box
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-red-600 text-white" onClick={decreaseImageSize}>
              Smaller
            </button>
            <button className="px-4 py-2 rounded-xl bg-green-600 text-white" onClick={increaseImageSize}>
              Bigger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuePlayground;