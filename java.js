document.write("<table border='1' align='center'>")

for (let x = 10; x<= 20; x++) {
    document.write("<tr class='linha"+x+"'>") //tr é coluna, x. aqui é definida a classe de linha + o número dela
        for (let y = 1; y<= 10; y++) {
            document.write("<td>") 
            document.write(y + ' * ' + x + ' = ' + (x * y))
            document.write("</td>")
        }
    }
    
document.write("</table>")