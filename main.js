    let inputN=document.getElementsByName("elements")[0];
    form = document.forms;
    type = document.querySelector("select");
    res = document.querySelector(".results");
    text = document.getElementsByName("texts")[0];
    form[0].onsubmit = function(ele){
        ele.preventDefault();
        document.querySelectorAll(".box").forEach(ele => ele.remove());
        for(let i=1;i<=inputN.value;i++)
        {
            let el=document.createElement(type.value);
            let ell=document.createTextNode(text.value);
            el.className="box";
            el.title="element";
            el.id=`id-${i}`;
            el.style.display="inline-block";
            el.style.width="200px";
            el.style.margin="20px";
            el.style.backgroundColor="orange";
            el.style.color="white";
            el.style.borderRadius="5px";
            el.style.padding="10px";
            el.style.textAlign="center";
            el.appendChild(ell);
            res.appendChild(el);
        }
    };
    let input=document.querySelectorAll(".input");
     sub=document.querySelector("[type= 'submit']");
     box=document.querySelectorAll(".box");
    for(let i=0;i<input.length;i++)
    {
        input[i].style.display="block";
        input[i].style.boxSizing="border-box";
        input[i].style.width="250px";
        input[i].style.padding="10px";
        input[i].style.margin="15px auto";
        input[i].style.borderRadius="5px";
        input[i].style.border="2px solid black";
    }
    sub.style.display="block";
    sub.style.width="250px";
    sub.style.margin="15px auto";
    sub.style.backgroundColor="green";
    sub.style.color="white";
    sub.style.borderRadius="5px";
    sub.style.padding="10px 10px";
    sub.style.textAlign="center";
    