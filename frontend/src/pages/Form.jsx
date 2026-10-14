import React from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
const Form = () => {
      const navigate = useNavigate();
    async function sumbithandler(e){
        e.preventDefault();
        const formData=new FormData(e.target)
        try{
       const response= await axios.post('http://localhost:3000/form',formData);
        navigate('/feed')
    }
    catch(error){
console.log(error.message);
    }
}
  return (
    <div className="min-h-screen flex items-center justify-center  from-gray-50 to-gray-100 p-6">
      <form 
        onSubmit={sumbithandler} 
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 transition-all"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Upload Image
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Share your photos with a custom caption
          </p>
        </div>

        {/* Image File Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Choose Image
          </label>
          <div className="relative group flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-50/30 transition cursor-pointer p-4">
            <div className="flex flex-col items-center justify-center space-y-1 text-center pointer-events-none">
              <svg className="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500 transition" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Click to upload
              </p>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
            />
          </div>
        </div>

        {/* Caption Input Section */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Caption
          </label>
          <input 
            type="text" 
            name="caption" 
            placeholder="Write a catchy caption..." 
            className="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-900 placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-600/20 transition-all duration-150"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default Form
