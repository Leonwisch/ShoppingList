# Dokumentation

**Autoren:** Leon und Joshua

## Aufgabe 1

In der ersten Aufgabe haben wir zuerst das Grundgerüst für unser Projekt aufgesetzt. Als erste Funktion haben wir direkt
den Befehl `ls -la` eingebaut, damit alle Verzeichnisinhalte inklusive der versteckten Dateien, Berechtigungen und
Dateigrössen angezeigt werden. Bei der Umsetzung konnten wir auf ein altes Codebeispiel aus einer früheren Aufgabe
verwenden und dieses für unser Projekt anpassen. Für Fragen zur Syntax und zur Optimierung des Codes haben wir ausserdem
KI als Unterstützung genutzt. Wir hatten zuerst aber auch Probleme mit der KI da sie nicht genau verstanden hat was wir
wollen und sie hat viel zu viel gemacht und gar nicht was wir brauchten.

## Aufgabe 2

In der zweiten Aufgabe haben wir eine Pipeline eingerichtet die das Testing und Linting macht. Die Pipeline wird
automatisch bei jedem Push ausgeführt. Im Workflow wird zuerst das Repository ausgecheckt, die Ordnerstruktur mit
`ls -la` aufgelistet und Node.jsaufgesetzt. Danach werden die Abhängigkeiten mit `npm ci` installiert. Für die
Testabdeckung und die Codequalität führen wir anschliessend die Jest-Tests mit `npm run test` und das Linting mit ESLint
über `npm run lint` aus. Am Ende wird die Anwendung mit `npm run build` gebaut, um sicher zu sein, dass das Projekt
fehlerfrei kompiliert. Bei dieser Aufgabe gab es auch Probleme mit KI da es nicht hinbkommt es ohne fehler zu machen es
gab immer Fehler bei dependencies.

## Aufgabe 3

In der dritten Aufgabe haben wir die Pipeline optimiert und in mehrere separate Jobs aufgeteilt. Anstatt alle Schritte
nacheinander in einem einzelnen Job auszuführen, laufen Linting und Testing jetzt parallel in eigenen Jobs. Der
Build-Prozess wird erst gestartet, wenn sowohl das Linting als auch die Tests erfolgreich bestanden wurden.
Abschliessend haben wir noch einen `deploy`-Job hinzugefügt, der nach dem erfolgreichen Build die Ausführung des
Deployments simuliert. Durch diese Aufteilung läuft die Pipeline schneller und ist deutlich übersichtlicher
strukturiert. Auch hier haben wir immer noch das problem mit den dependencies. Dafür haben wir KI genutz in der hoffnung
dass es das lösen, jedoch konnte es auch nicht lösen.

Ki haben wir vorallem bei allen aufgaben als unterstützung verwendet, was auch sehr gehoffen hat waren die vorherigen
Aufgaben da wir auch viel von dort kopieren konnten. Leider hatten wir bis zum Schluss dieses dependencies problem, bei
disem konnten wir es nicht mit KI lösen und nicht mit hilfe von Google obwohl wir extrem viele verschiede Sachen
ausprobiert haben.

Beitrag von Leon: Ich habe diese Reflextion geschrieben zusätzlich habe ich auch das Github Reposetory gemacht. Auch
habe ich die Struktur für den Woekflow erstellt und habe die Pipelines getestet.

Beitrag von Joshua:
Er hat alles Programmier, also er hat alle Pieplines erstellt.