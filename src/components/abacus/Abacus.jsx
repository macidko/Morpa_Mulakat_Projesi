import React from "react";
import "./abacus.css";
import Bead from "./Bead";

function Abacus() {
    return (
        <>
            {/* Abacus container */}
            <section className="abacus-cont">
                {/* Lines container */}
                <div className="lines-cont">
                    <Bead id={"group9"} />
                    <Bead id={"group8"} />
                    <Bead id={"group7"} />
                    <Bead id={"group6"} />
                    <Bead id={"group5"} />
                    <Bead id={"group4"} />
                    <Bead id={"group3"} />
                    <Bead id={"group2"} />
                    <Bead id={"group1"} />
                </div>
                {/* Bottom separator */}
                <div className="bottom"></div>
            </section>
        </>
    );
}

export default Abacus;
