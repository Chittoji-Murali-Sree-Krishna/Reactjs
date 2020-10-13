import React from 'react';
import './App.css';

function Projects() {
    return ( 
        <div className='projectscontainer'>
            <div className="projectsrow">
                <div className="mainlink">
                <h1 className='apricot'>My Github:</h1>
                <b className='blue'>https://github.com/Chittoji-Murali-Sree-Krishna</b>
                </div>
                <div className="projectscol">
                    <h2>Project's i have done:</h2>
                    <div className="sublinks">
                    {/* python codes*/}
                    <div className="pythoncodes">
                    <ul>
                        <li><h3 className='red'>Python</h3></li>
                        <ul>
                            <li><h4 className='green'>Django</h4></li>
                            <ul>
                                <li>myportfolio</li>
                                <li>e-commerce</li>
                                <li>loginSignup</li>
                                <li>more upcoming</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Selenium</h4></li>
                            <ul>
                                <li>mail_bot(GUI)</li>
                                <li>mail_bot</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Tkinter</h4></li>
                            <ul>
                                <li>Calculator</li>
                                <li>Contactbook</li>
                                <li>Dbase_txt</li>
                                <li>Email_slicer</li>
                                <li>Fibonacci_sequence</li>
                                <li>File_manager</li>
                                <li>Input_printing</li>
                                <li>Number_guessing</li>
                                <li>Password_manager</li>
                                <li>Roll_dice</li>
                                <li>Tictactoe</li>
                                <li>Timer</li>
                                <li>Validate_save</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Terminal_base</h4></li>
                            <ul>
                            <li>Bulkfile_rename</li>
                            <li>File_sorter</li>
                            <li>Hangman</li>
                            <li>Secret_text</li>
                            <li>Terminal_game</li>
                            </ul>
                        </ul>
                    </ul>
                    </div>
                    {/* Frontend codes*/} 
                    <div className="frontendcodes">   
                    <ul>
                        <li><h3 className='red'>Frontend</h3></li>
                        <ul>
                            <li><h4 className='green'>10-projects</h4></li>
                            <ul>
                                <li>Car-repair</li>
                                <li>Fashion</li>
                                <li>Legal</li>
                                <li>Newspaper</li>
                                <li>Portfolio</li>
                                <li>Restraunt</li>
                                <li>Shopping</li>
                                <li>Streaming</li>
                                <li>Technology</li>

                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Html_Css</h4></li>
                            <ul>
                                <li>Ready-player-one</li>
                                <li>Spacedoggo</li>
                                <li>E-commerce</li>
                                <li>Movie-review</li>
                                <li>Arch</li>
                                <li>Recipe</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Html_css_javascript</h4></li>
                            <ul>
                                <li>Archlinux</li>
                                <li>Input_to_table</li>
                                <li>Mobile_recharge</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>Vanilla_javascript</h4></li>
                            <ul>
                                <li>Calculator</li>
                                <li>Clock</li>
                                <li>Color-change</li>
                                <li>Countdown</li>
                                <li>Mode-switcher</li>
                                <li>Numbercount</li>
                                <li>To-do-list</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4 className='green'>My_portfolio</h4></li>
                        </ul>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
         </div>
    );
}

export default Projects;