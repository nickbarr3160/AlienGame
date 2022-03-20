var steps = 1
var alien = document.getElementById("al");
var defaultPos = alien.style.top
var smallBox = document.getElementById("small-box")
console.log(smallBox.style.left)
var bigBox = document.getElementById("big-box")
console.log(defaultPos)



var foggle = null
var screenEnd = parseInt(window.innerWidth) + -15 + "px"



jumpTimer  = null
rTimer = null
lTimer = null
boxTimer = null


// Jump Alien

function jump ()
{   
    alien.style.top = parseInt(alien.style.top)+ -10 + "px"
     if (jumpTimer != null && alien.style.left >= parseInt(smallBox.style.left)+ -75 + "px" &&    alien.style.left <= parseInt(smallBox.style.left)+ 75 + "px" )
    {
        setTimeout (function()
        {
            smallBox.src = "/explosion.gif" 
        },750) 
    }
}


// Function to avoid double jumping

function noJump ()
{
    alien.style.top = parseInt(alien.style.top)+ 15 + "px"
    if (alien.style.top > "200px")
    {
        alien.style.top = "200px"
    }
}

// Function for alien steps

function walkingStep ()
{
    if (steps > 30)
    {
        steps = 0
    }

    alien.src = "./alien 2/alienrwalk" + steps + ".gif"
}

// Alien walk right
        
function rightWalk ()
        {
                walkingStep()
           if (alien.style.top == "200px")
            
            {
                steps++
              
            } 
            else if (alien.style.top != "200px")
            {
                steps
            }
               alien.style.left = parseInt(alien.style.left)+ 1 + "px"

               if (alien.style.left == screenEnd)
               {
                  leftTimer = setInterval (moveLeft, 20)
                  clearInterval(rightTimer)
                  rTimer = null
               }

               if (alien.style.left == parseInt(smallBox.style.left) + -60 + "px" && jumpTimer == null)
               {
                   boxTimer = setInterval(kickBox,20)
                   setTimeout (function()
                   {
                            clearInterval(boxTimer)
                   },200)
                }                   
        }
               
    
    // Function for kicking small box
    function kickBox ()
    {
    smallBox.style.left = parseInt(smallBox.style.left)+ 15 + "px"
    }   
                   
               
        
    function walkingStepTwo ()
    {
        if (steps > 30)
            {
                steps = 0
            }
            alien.src = "./alien 2/alienlwalk" + steps + ".gif"
        }

        
        
    // Alien walk right
    
    function leftWalk ()
        {
            walkingStepTwo ()
            if (alien.style.top == "200px")
                {
                 steps++
                } 
               
             else if (alien.style.top != "200px")
                {
                 steps
                }
                
                alien.style.left = parseInt(alien.style.left)+ -1 + "px"
                
                if (alien.style.left <= "-10px")
                {
                   rTimer = setInterval (rightWalk, 20)
                   clearInterval(lTimer)
                   lTimer = null
                }



                if(alien.style.left == parseInt(bigBox.style.left)+ 35 + "px" )
                {
                    rTimer = setInterval (rightWalk, 20)
                    clearInterval(lTimer)
                    lTimer = null
                }
        }

            
        //Alien Jump

        function jumpStop ()
        {
            if (foggle == true)
            {
               clearInterval(jumpTimer)
        
                jumpTimer = setInterval(noJump, 100)
                foggle = null
                setTimeout(function()
                {
                    clearInterval(jumpTimer)
                    jumpTimer = false
                },500)
               
                setTimeout(function()
                {
                    jumpTimer = null
                }, 551)
            }
        }
 
        //Alien controls on press

        function onPress (keyBeingPressed)
        {   
            // jump on up arrow
            if(keyBeingPressed.which == 38)
            
            {   
               
                    if (jumpTimer == null)
                    {
                        jumpTimer = setInterval(jump, 100)
                        foggle = true                    
                    }
                setTimeout(jumpStop, 500)
            
               
               
                console.log(alien.style.top)
            }
           
           // walk right on right arrow 
            else if (keyBeingPressed.which == 39)
    
            {
                if (rTimer == null)
                {  
                 rTimer = setInterval(rightWalk, 20)
                 clearInterval(lTimer)
                 lTimer = null
                }
            }
                 
            //walk left on left arrow    
            else if (keyBeingPressed.which == 37)
            {
                if (lTimer == null)
                {
                lTimer = setInterval(leftWalk, 20)
                clearInterval(rTimer)
                rTimer = null    
                }
            }
            
            // stop alien on down arrow
            else if (keyBeingPressed.which == 40)
            {
                clearInterval(rTimer)
                rTimer = null
                clearInterval(lTimer)
                lTimer = null
            }    
        }
        
                
        
window.onkeydown = onPress
