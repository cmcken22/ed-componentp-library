import { Box, Popper } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useConditionalDelay } from "src/Hooks";

const Popover = ({ children, anchorEl, onClose }: any) => {
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const [arrowRef, setArrowRef] = useState(null);
  const ref = useRef(null);
  const listenDelay = useConditionalDelay(open, 100);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (!listenDelay || !open) return;
      if (ref.current && !ref.current.contains(e.target)) {
        if (onClose) onClose();
      }
    },
    [onClose, open, listenDelay]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Popper
      ref={ref}
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
        {
          name: "flip",
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: "document",
            // padding: 8,
          },
        },
        // {
        //   name: "preventOverflow",
        //   enabled: true,
        //   options: {
        //     altAxis: true,
        //     altBoundary: true,
        //     tether: true,
        //     rootBoundary: "document",
        //     // padding: 8,
        //   },
        // },
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
            x: 0.5,
            padding: ({ popper, reference, placement }) => {
              console.log("placement:", placement);
              console.log("popper:", popper);
              console.log("reference:", reference);
              // return popper.width / reference.width;
              return 10;
            },
          },
        },
      ]}
    >
      <Box
        component="span"
        className="arrow"
        ref={setArrowRef}
        sx={{
          // height: "20px",
          // width: "20px",
          // backgroundColor: "red",
          position: "absolute",
          top: "-5px",
          width: 0,
          height: 0,
          borderLeft: "5px solid transparent",
          borderRight: "5px solid transparent",
          borderBottom: "5px solid black",
        }}
      />
      {children}
    </Popper>
  );
};

export default Popover;
