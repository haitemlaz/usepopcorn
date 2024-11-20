import { useEffect, useState } from "react";

export function useKey(Function, key) {
  useEffect(
    function () {
      function AddEvent(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          Function();
        }
      }
      document.addEventListener("keydown", AddEvent);
      return function () {
        document.removeEventListener("keydown", AddEvent);
      };
    },
    [Function, key]
  );
}
