define({"oj-message":{fatal:"Krytyczny",error:"Błąd",warning:"Ostrzeżenie",info:"Informacja",confirmation:"Potwierdzenie","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Wartość nie ma oczekiwanego formatu.",detail:"Proszę podać wartość w oczekiwanym formacie.","plural-separator":", ",hint:{summary:"Przykład: {exampleValue}",detail:'Proszę podać wartość w formacie takim, jaki podano w tym przykładzie: "{exampleValue}"',"detail-plural":'Proszę podać wartość w formacie takim, jaki podano w tych przykładach: "{exampleValue}"'},
optionHint:{detail:'Akceptowaną wartością opcji "{propertyName}" jest "{propertyValueValid}"',"detail-plural":'Akceptowanymi wartościami opcji "{propertyName}" są "{propertyValueValid}"'},optionTypesMismatch:{summary:'Gdy opcja "{propertyName}" jest ustawiona na "{propertyValue}", trzeba podać wartość opcji "{requiredPropertyName}".'},optionTypeInvalid:{summary:'Nie podano wartości oczekiwanego typu dla opcji "{propertyName}".'},optionOutOfRange:{summary:'Wartość {propertyValue} jest spoza zakresu dla opcji "{propertyName}".'},
optionValueInvalid:{summary:'Podano niepoprawną wartość "{propertyValue}" opcji "{propertyName}".'},number:{decimalFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie liczby.'},decimalFormatUnsupportedParse:{summary:'decimalFormat: typy "short" i "long" nie są już obsługiwane przy analizie składniowej konwertera.',detail:"Proszę zmienić składnik na readOnly. Dla pól readOnly nie jest wywoływana funkcja analizy składniowej konwertera."},currencyFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie waluty.'},
percentFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie procentu.'}},datetime:{datetimeOutOfRange:{summary:'Wartość "{value}" jest spoza zakresu dla opcji "{propertyName}".',detail:"Proszę podać wartość z przedziału od {minValue} do {maxValue}."},dateFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie daty.'},timeFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie godziny.'},datetimeFormatMismatch:{summary:'Wartość "{value}" nie jest podana w oczekiwanym formacie daty i godziny.'},
dateToWeekdayMismatch:{summary:'Dzień "{date}" nie przypada w "{weekday}".',detail:"Proszę podać dzień tygodnia odpowiadający dacie."}}},"oj-validator":{length:{hint:{min:"Proszę podać {min} lub więcej znaków.",max:"Proszę podać {max} lub mniej znaków",inRange:"Proszę podać {min} lub więcej znaków, maksymalnie {max}.",exact:"Proszę podać {length} znaki(-ów)."},messageDetail:{tooShort:"Proszę podać {min} lub więcej znaków, nie mniej.",tooLong:"Proszę podać {max} lub mniej znaków, nie więcej."},messageSummary:{tooShort:"Jest za mało znaków.",
tooLong:"Jest zbyt wiele znaków."}},range:{number:{hint:{min:"Proszę podać liczbę większą lub równą {min}.",max:"Proszę podać liczbę mniejszą lub równą {max}.",inRange:"Proszę wprowadzić liczbę z przedziału od {min} do {max}."},messageDetail:{rangeUnderflow:"Liczba {value} musi być większa lub równa {min}.",rangeOverflow:"Liczba {value} musi być mniejsza lub równa {max}."},messageSummary:{rangeUnderflow:"Za mała liczba.",rangeOverflow:"Zbyt duża liczba."}},datetime:{hint:{min:"Proszę podać datę i godzinę przypadającą {min} lub później.",
max:"Proszę podać datę i godzinę przypadającą {max} lub wcześniej.",inRange:"Proszę podać datę i godzinę przypadającą między {min} a {max}."},messageDetail:{rangeUnderflow:"Data i godzina nie mogą przypadać przed {min}.",rangeOverflow:"Data i godzina nie mogą przypadać po {max}."},messageSummary:{rangeUnderflow:"Data i godzina przypada przed datą minimalną.",rangeOverflow:"Data i godzina przypada po dacie maksymalnej."}}},restriction:{date:{messageSummary:"Data {value} pochodzi z wyłączonego wpisu.",
messageDetail:"Data {value} nie może pochodzić z wyłączonego wpisu."}},regExp:{summary:"Niepoprawny format.",detail:'Wartość "{value}" musi być zgodna z tym wzorcem: "{pattern}"'},required:{summary:"Wartość jest wymagana.",detail:"Trzeba podać wartość."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Poprz.",nextText:"Nast.",currentText:"Dzisiaj",weekHeader:"Tydz.",tooltipCalendar:"Wybór daty",tooltipCalendarDisabled:"Wybór daty wyłączony",
weekText:"Tydzień",datePicker:"Selektor daty",inputHelp:"Aby uzyskać dostęp do kalendarza, proszę nacisnąć klawisz ze strzałką w dół lub w górę",inputHelpBoth:"Aby uzyskać dostęp do kalendarza, proszę nacisnąć klawisz ze strzałką w dół lub w górę; aby uzyskać dostęp do rozwijanej listy godzin -  klawisz Shift + klawisz ze strzałką w dół lub w górę",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},
dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Wybór godziny",tooltipTimeDisabled:"Wybór godziny wyłączony",inputHelp:"Aby uzyskać dostęp do rozwijanej listy godzin, proszę nacisnąć klawisz ze strzałką w dół lub w górę",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:'Wartość musi być zgodna z tym wzorcem: "{pattern}"'}},
"oj-ojFilmStrip":{labelAccArrowNextPage:"Następna strona",labelAccArrowPreviousPage:"Poprzednia strona",tipArrowNextPage:"Następna",tipArrowPreviousPage:"Poprzednia"},"oj-ojDataGrid":{accessibleSortAscending:"{id} posortowano w porządku rosnącym",accessibleSortDescending:"{id} posortowano w porządku malejącym",accessibleActionableMode:"Wejście do trybu z wykonywaniem czynności",accessibleNavigationMode:"Wejście do trybu nawigacyjnego",accessibleSummaryExact:"To jest tabela danych z {rownum} wierszami i {colnum} kolumnami",
accessibleSummaryEstimate:"To jest tabela danych z nieznaną liczbą wierszy i {colnum} kolumn",accessibleSummaryExpanded:"Liczba obecnie rozwiniętych wierszy wynosi {num}",accessibleInitialFocus:"Aby ustawić fokus na bieżącej komórce, proszę nacisnąć klawisz Tab",accessibleRowExpanded:"Wiersz rozwinięty",accessibleRowCollapsed:"Wiersz zwinięty",accessibleRowSelected:"Wybrany wiersz {row}",accessibleColumnSelected:"Wybrana kolumna {column}",accessibleStateSelected:"wybrane",accessibleMultiCellSelected:"Liczba wybranych kolumn wynosi {num}",
accessibleRowContext:"Wiersz {index}",accessibleColumnContext:"Kolumna {index}",accessibleRowHeaderContext:"Nagłówek {index} wiersza",accessibleColumnHeaderContext:"Nagłówek {index} kolumny",accessibleLevelContext:"Poziom {level}",accessibleRangeSelectModeOn:"Tryb dodawania wybranego zakresu komórek włączony",accessibleRangeSelectModeOff:"Tryb dodawania wybranego zakresu komórek wyłączony",accessibleFirstRow:"Osiągnięto pierwszy wiersz",accessibleLastRow:"Osiągnięto ostatni wiersz",accessibleFirstColumn:"Osiągnięto pierwszą kolumnę",
accessibleLastColumn:"Osiągnięto ostatnią kolumnę",accessibleSelectionAffordanceTop:"Górny uchwyt wyboru",accessibleSelectionAffordanceBottom:"Dolny uchwyt wyboru",msgFetchingData:"Pobieranie danych...",msgNoData:"Nie ma żadnych elementów do wyświetlenia.",labelResize:"Zmień rozmiar",labelResizeWidth:"Zmień rozmiar: szerokość",labelResizeHeight:"Zmień rozmiar: wysokość",labelSortRow:"Sortuj wiersz",labelSortRowAsc:"Sortuj wiersz rosnąco",labelSortRowDsc:"Sortuj wiersz malejąco",labelSortCol:"Sortuj kolumnę",
labelSortColAsc:"Sortuj kolumnę rosnąco",labelSortColDsc:"Sortuj kolumnę malejąco",labelCut:"Wytnij",labelPaste:"Wklej",labelEnableNonContiguous:"Włącz wybór nieciągły",labelDisableNonContiguous:"Wyłącz wybór nieciągły"},"oj-ojRowExpander":{accessibleLevelDescription:"Poziom {level}",accessibleRowDescription:"Poziom {level}, wiersz {num} z {total}",accessibleRowExpanded:"Wiersz rozwinięty",accessibleRowCollapsed:"Wiersz zwinięty",accessibleStateExpanded:"rozwinięte",accessibleStateCollapsed:"zwinięte"},
"oj-ojListView":{msgFetchingData:"Pobieranie danych...",msgNoData:"Nie ma żadnych elementów do wyświetlenia."},"oj-_ojLabel":{tooltipHelp:"Pomoc",tooltipRequired:"Wymagane"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Zmniejszenie",tooltipIncrement:"Przyrost"},"oj-ojTable":{labelSelectRow:"Wybierz wiersz",labelSelectColumn:"Wybór kolumny",labelSort:"Sortuj",
labelSortAsc:"Sortuj rosnąco",labelSortDsc:"Sortuj malejąco",msgFetchingData:"Pobieranie danych...",msgNoData:"Nie ma żadnych danych do wyświetlenia."},"oj-ojTabs":{labelCut:"Wytnij",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po",removeCueText:"Możliwe do usunięcia"},"oj-ojSelect":{seachField:"Pole wyszukiwania",noMatchesFound:"Nie znaleziono zgodnych"},"oj-ojSwitch":{SwitchON:"Wł.",SwitchOFF:"Wył."},"oj-ojTree":{stateLoading:"Ładowanie...",labelNewNode:"Nowy węzeł",labelMultiSelection:"Wybór wielokrotny",
labelEdit:"Edytuj",labelCreate:"Utwórz",labelCut:"Wytnij",labelCopy:"Kopiuj",labelPaste:"Wklej",labelRemove:"Usuń",labelRename:"Zmień nazwę",labelNoData:"Brak danych"},"oj-ojPagingControl":{labelAccPaging:"Paginacja",labelAccNavFirstPage:"Pierwsza strona",labelAccNavLastPage:"Ostatnia strona",labelAccNavNextPage:"Następna strona",labelAccNavPreviousPage:"Poprzednia strona",labelAccNavPage:"Strona",labelLoadMore:"Pokaż więcej...",labelLoadMoreMaxRows:"Osiągnięto maksymalny limit {maxRows} wierszy.",
labelNavInputPage:"Strona",labelNavInputPageMax:"z {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeOf:"z",msgItemRangeItems:"elementy",tipNavInputPage:"Idź do strony",tipNavPageLink:"Idź do strony {pageNum}",tipNavNextPage:"Następna",tipNavPreviousPage:"Poprzednia",tipNavFirstPage:"Pierwsza",tipNavLastPage:"Ostatnia",pageInvalid:{summary:"Podana wartość strony jest niepoprawna.",detail:"Proszę podać wartość większą niż 0."},maxPageLinksInvalid:{summary:"Wartość maxPageLinks jest niepoprawna.",
detail:"Proszę podać wartość większą niż 4."}},"oj-ojMasonryLayout":{labelCut:"Wytnij",labelPasteBefore:"Wklej przed",labelPasteAfter:"Wklej po"},"oj-ojChart":{labelDefaultGroupName:"Grupa {0}",labelSeries:"Seria",labelGroup:"Grupa",labelDate:"Data",labelValue:"Wartość",labelTargetValue:"Cel",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procent",labelLow:"Minimum",labelHigh:"Maksimum",labelOpen:"Otwarcie",labelClose:"Zamknięcie",labelVolume:"Wolumen",labelMin:"Min.",labelMax:"Maks.",labelOther:"Inne",
tooltipPan:"Panoramowanie",tooltipSelect:"Zaznaczanie obszaru",tooltipZoom:"Powiększanie obszaru",componentName:"Wykres"},"oj-dvtBaseGauge":{componentName:"Miernik"},"oj-ojDiagram":{componentName:"Diagram"},"oj-ojLegend":{componentName:"Legenda"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Inne",labelGroup:"Grupa",labelSize:"Rozmiar",labelAdditionalData:"Dodatkowe dane",componentName:"Widok N-polowy"},"oj-ojSparkChart":{componentName:"Wykres"},"oj-ojSunburst":{labelColor:"Kolor",labelSize:"Rozmiar",
componentName:"Wykres pierścieniowy"},"oj-ojTagCloud":{componentName:"Chmura znaczników"},"oj-ojThematicMap":{componentName:"Mapa tematyczna"},"oj-ojTimeline":{componentName:"Ścieżka czasowa",labelSeries:"Seria",tooltipZoomIn:"Powiększ",tooltipZoomOut:"Pomniejsz"},"oj-ojTreemap":{labelColor:"Kolor",labelSize:"Rozmiar",tooltipIsolate:"Izoluj",tooltipRestore:"Przywróć",componentName:"Mapa drzewa"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tys.",labelScalingSuffixMillion:"mln.",labelScalingSuffixBillion:"mld.",
labelScalingSuffixTrillion:"bln.",labelScalingSuffixQuadrillion:"bld.",labelInvalidData:"Niepoprawne dane",labelNoData:"Nie ma żadnych danych do wyświetlenia",labelClearSelection:"Wyczyść wybór",labelDataVisualization:"Wizualizacja danych",messageNotReadyToRender:{summary:"Przed renderowaniem ten składnik musi zostać dołączony do widocznego poddrzewa modelu DOM."},stateSelected:"Wybrane",stateUnselected:"Niewybrane",stateMaximized:"Zmaksymalizowane",stateMinimized:"Zminimalizowane",stateExpanded:"Rozwinięte",
stateCollapsed:"Zwinięte",stateIsolated:"Izolowane",stateHidden:"Ukryte",stateVisible:"Widoczne",labelAndValue:"{0}: {1}"},"oj-ojNavigationList":{defaultRootLabel:"Lista nawigacyjna",hierMenuBtnLabel:'Przycisk "Menu hierarchiczne"',selectedLabel:"wybrane",previousIcon:"Poprzednia",msgFetchingData:"Pobieranie danych...",msgNoData:"Nie ma żadnych elementów do wyświetlenia."},"oj-ojSlider":{noValue:"ojSlider nie ma wartości",maxMin:"Wartość maksymalna nie może być mniejsza niż minimalna",valueRange:"Wartość musi się zawierać między minimalną a maksymalną",
optionNum:"Opcja {option} nie jest liczbą",invalidStep:"Niepoprawny krok; krok musi być > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Wchodzenie do okna wyskakującego. Do przechodzenia między oknem wyskakującym a powiązanym formantem proszę używać klawisza F6.",ariaLiveRegionInitialFocusNone:"Okno wyskakujące otwarte. Do przechodzenia między oknem wyskakującym a powiązanym formantem proszę używać klawisza F6.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Wchodzenie do okna wyskakującego. Okno wyskakujące można zamknąć, przechodząc do ostatniego zawartego w nim łącza.",
ariaLiveRegionInitialFocusNoneTouch:"Okno wyskakujące otwarte. Proszę przejść do następnego łącza, aby ustawić fokus w oknie wyskakującym.",ariaFocusSkipLink:"Aby przejść do otwartego okna wyskakującego, proszę dwa razy stuknąć.",ariaCloseSkipLink:"Aby zamknąć okno wyskakujące, proszę dwa razy stuknąć."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"Wchodzenie do menu. Menu można zamknąć bez wybierania z niego żadnej pozycji, przechodząc do występującego po nim łącza.",ariaLiveRegionInitialFocusNoneTouch:"Menu otwarte. Proszę przejść do następnego łącza, aby ustawić fokus w menu.",
"ariaPreceding Link":"Aby przejść do otwartego menu, proszę poruszać się do przodu.",ariaFocusSkipLink:"Aby przejść do otwartego menu, proszę dwa razy stuknąć.",ariaCloseSkipLink:"Aby zamknąć menu, proszę dwa razy stuknąć."}});