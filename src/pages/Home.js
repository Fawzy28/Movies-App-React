import cinema from '.././assests/images/cinema.jpg'

export default function  ()
{

    return (
<div >
<img src={cinema} class="img-fluid" alt="..." style={{width:'1360px'}}></img>
<h1 style={{position:'absolute' , top:"280px" , left:"470px", fontFamily:'monospace' , fontSize:'100px'}} >Welcome</h1>
</div>
    )   
}