# Aplikacja zrobiona jako zadanie rekrutacyjne do firmy Voicelab.

Nie wszystkie funkcjonalności tabeli działają poprawnie, moim ogólnym konceptem było zaimplementowanie paginacji z użcyiem api serwerowego, na początku założyłem nie ściągać wszystkich danych z endpointu postaci wraz z załadowaniem aplikacji, przez co funkcjonalności nie zrealizowane po stronie serwera - sortowanie, filtorwanie po światach i gatunkach nie zostały do końca zrealizowane. Wydawało mi się, że taki jest główny zamysł tego zadnia - nie ściągać wszystkiego od razu - z dużymi zasobami się tak nie będzie dało.

### Ogólny opis działania:
Aplikacja pobiera i wyświetla jedną stronę z api. Dodatkowe dane - nazyw planet, gatunków, pojazdów pobierane są asynchronicznie i nie duplikowane są zapytania do api, co pozwala skrócić czas ładowania zasobów.

Działa wyszukiwanie po nazwie, przechodznie między stronami, które po stronie api było zaimplementowane.
Wyświetlane są również nazwy gatunków i planet w dropdown multi-selectach - dodatkowe dane dociągane są asynchronicznie podczas scrollowania w dół.

Usuwanie z tabeli i deaktywacja i zmiana nazwy nie utrzymuje stanu pomiędzy zmianami stron.

### Co mogłem zrobić inaczej

W celu realizacji sortowań i filtrów, utrzymania stanu obiektów między zmianami stron, musiałbym pobrać wszystkie postacie na starcie, mogłoby być to zrealizowane w następujący sposób:

1. pobieram dane początkowe i wyświetlam je,
2. następnie w tle dociągam pozostałe postacie - dociąganie danych do postaci odbywałoby się w trakcie zmieniania stron,

Dodatkowym rozwiązaniem usprawniającym ogólne działanie aplikacji byłoby zaimplementowanie prostego cacha w celu uniknięcia ściągania tych samych danych, o które już raz pytaliśmy - nie starczyło mi na to niestety czasu.
