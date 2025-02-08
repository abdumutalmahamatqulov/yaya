import React from 'react'
import Asosiy from "./Asosiy";
import Companies from "./Companies";
import Process from "./Process";
import Btwob from "./Btwob";
import Categories from "./Categories";
import Ustinliklarimiz from "./Ustinliklarimiz";
import Feedback from "./Feedback";
import Download from './Download';
import Blog from './Blog';
import Forma from './Forma';

export default function Home() {
    return (
        <div className='home'>
            <Asosiy />
            <Companies />
            <Process />
            <Btwob />
            <Categories />
            <Ustinliklarimiz />
            <Feedback />
            <Download/>
            <Blog/>
            <Forma/>
        </div>
    )
}
