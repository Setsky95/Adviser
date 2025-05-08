// src/components/common/Loader.jsx
import './common.css'; 
import { JellyTriangle } from 'ldrs/react'
import 'ldrs/react/JellyTriangle.css'

const Loader = () => {
  return (
  <div className="loader-container">
<JellyTriangle
  size="100"
  speed="1.75"
  color="white" 
  
/>  </div>);
};

export default Loader;


