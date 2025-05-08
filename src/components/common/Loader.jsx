// src/components/common/Loader.jsx
import './common.css'; 
import { JellyTriangle } from 'ldrs/react'
import 'ldrs/react/JellyTriangle.css'

const Loader = () => {
  return (
<JellyTriangle
  size="100"
  speed="1.75"
  color="white" 
/>  );
};

export default Loader;


