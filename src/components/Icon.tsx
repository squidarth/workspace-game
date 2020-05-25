import React, { useState, useEffect, useRef} from 'react';

function Icon(props: {appName: string, iconLogo: React.ReactNode, openApplication: () => any  }) {

  const [iconColor, setIconColor] = useState("blue");
function useOutsideAlerter(ref: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIconColor("blue")
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef);

  return (<div ref={wrapperRef} onClick={() => setIconColor("#001433") } style={{backgroundColor: iconColor} } onDoubleClick={props.openApplication} className="icon">
    <div className="icon-title">
      {props.iconLogo}
    </div>
    {props.appName} 
  </div>
  );
}

export default Icon