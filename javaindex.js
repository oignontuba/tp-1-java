function test_age()
{
    let age = prompt ("quelle est on age ?");
    if(age <18 )
    {
        document.write("vous êtes mineurs ");
        document.body.style.backgroundColor="red" ;
    }
    else
    {
        document.write("vous êtes majeurs ");
        document.body.style.backgroundColor="green";
    }
}
function calcul_moyenne()
{
    var n1 = prompt("donner la premeire note ");
    var n2 = prompt("donner la deuxième  note ");
    var n3 = prompt("donner la troisième  note ");
    var somme = Number(n1)+Number(n2)+Number(n3);
    document.write("voici la somme : "+somme+"<br>");
    var moyenne = somme/3;
    document.write("voici la la moyenne "+ moyenne+"<br>");
    if(moyenne <10 )
        {
            document.write("Désolé vous êtes redoublant  ");
            document.body.style.backgroundColor="red" ;
        }
        else if (moyenne <14)
        {
            document.write(" moyenne passable  ");
            document.body.style.backgroundColor="green";
        }
    
            
         else if ( moyenne < 0 || moyenne >20)
                {
                    document.write(" moyenne invalide   ");
                    document.body.style.backgroundColor="green";
                }
            else if ( 14 <moyenne )
                    {
                        document.write(" mention bien   ");
                        document.body.style.backgroundColor="green";
                    }
}


function test_couleur ()
{
    let couleur = prompt ("donner une couleur ");
    document.body.style.backgroundColor=couleur;
    const maVideo = document.getElementById("v1");
    maVideo.style.display = "none";
}


