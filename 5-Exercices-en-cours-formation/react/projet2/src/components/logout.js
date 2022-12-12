import React, { useState } from "react";
import { redirect } from "react-router-dom";

function Deconnexion() {
    function Deco() {
      localStorage.removeItem("connecte");
  }
      return (
        <form>
          <button onClick={Deco} >
            Déconnexion
          </button>
        </form>
      );
  
  }
  export default Deconnexion
  