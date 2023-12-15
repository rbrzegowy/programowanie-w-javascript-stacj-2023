## Canvas, kanwasik. 
#### Projekt dwutygodniowy  
Coś takiego: [Canvas - w kulki a nie w piłkę...](https://wseii-my.sharepoint.com/:v:/g/personal/rbrzegowy_wsei_edu_pl/EYu-Qxy_FudBtBxuxjvob24BXCLgRbkMaJnnQ6hoyYnY1Q?e=Q6e1vf&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
### Wersja Nic się nie działo, naprawdę nic się... :
1. Narysuj X kulek poruszających się w dowolnym kierunku z losową prędkością
1. Jeśli odległość pomiędzy kulkami jest mniejsza niż Y rysuj pomiędzy nimi linię
1. Kulki odbijają się od krawędzi strony
1. Dodaj przyciski Start i Reset
1. Zbadaj ile jesteś w stanie wyświetlić kulek (stabilne 60fps)

### Wersja Task Failed Successfully: 
1. Kursor myszy odpycha/przyciąga znajdujące się w pobliżu kulki. Siła odpychania/przyciągania jest konfigurowalna.
2. Kliknięcie w kulkę powoduje jej usunięcie i utworzenie dwóch nowych w losowych miejscach.

### Wersja Męczy nas piłka:
1. Każda kulka ma początkowo losowy rozmiar. Rozmiar kulki określa jej energię. Agarrr:)
2. Gdy kulka łączy się z drugą (linia) energia płynie od kulki słabszej do silniejszej (kulki zmieniają rozmiar).   
Siła kulki to X \* Prędkość + Y \* Masa.  
X, Y konfigurowalne przez użytkownika.
3. Kulki o rozmiarze mniejszym niż 1 umierają
4. W miarę jak kulka rośnie jej prędkość zwalnia (gdy maleje - przyspiesza)

### Przydamisie:
> Rysowanie koła: ctx.arc().  
Rysownie linii: ctx.beginPath(), ctx.moveTo(), ctx.lineTo()     
Wypełnianie/obrysowanie kształtu: ctx.fill(), ctx.stroke()   
Czyszczenie canvas: ctx.clearRect()
Sprawdzenie rozmiarów ekranu: obiekt window.screen
