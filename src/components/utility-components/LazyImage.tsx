import { useEffect, useState } from "react";

import loadingGIF from "../assets/loading.gif";

interface Props{
  alt: string;
  className: string;
  src: string;
}

const LazyImage:React.FC<Props> = (props)=> {
  const { alt, className, src } = props;
  const [source, setSource] = useState(loadingGIF);
  useEffect(() => {
    //console.log("fetching image");
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.blob();
      })
      .then((data) => {
        let url = URL.createObjectURL(data);
        setSource(url);
      })
      .catch((error) => {
        console.log(error.message);
        return;
      });
  }, [src]);
  return <img alt={alt} src={source} className={className}></img>;
}
export default LazyImage;
