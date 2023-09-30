
const allData = [
	{
		heading : 'Computer concept & Fundamental',
		imageLink : '../images/computer_fundamental.jpg',
		pdfLink : '../pdf/computer_fundamental.pdf',
		tutorial : [{
			link:'<iframe src="https://www.youtube.com/embed/tIfRDPekybU?si=jq6M55fQ3CvZ_MfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "A process is a _______.",
				answear:"program in the execution",
				options: [
					"single thread of execution.",
					"program in the execution",
					"program in the memory",
					"task"
				]
			},
			{
				numb: 2,
				question: "The word processing feature that catches most random typographical errors and misspellings is known as _____.",
				answear:"Spell checker",
				options: [
					"Grammar checker",
					"Spell checker",
					"Word checker",
					"None of the these"
				]
			},
			{
				numb: 3,
				question: "What is smallest unit of the information?",
				answear:"A bit",
				options: [
					"A bit",
					"A byte",
					"A block",
					"A nibble"
				]
			},
			{
				numb: 4,
				question: "What is the decimal equivalent of the binary number 10111?",
				answear:"23",
				options: [
					"21",
					"39",
					"42",
					"23"
				]
			},
			{
				numb: 5,
				question: "What is the term for a temporary storage area that compensates for differences in data rate and data flow between devices?",
				answear:"Buffer",
				options: [
					"Buffer",
					"Bus",
					"Channel",
					"Modem"
				]
			},
			{
				numb: 6,
				question: "How many color dots make up one color pixel on a screen?",
				answear:"3",
				options: [
					"265",
					"16",
					"8",
					"3"
				]
			},
			{
				numb: 7,
				question: "Which of the following values is the correct value of this hexadecimal code 1F.01B?",
				answear:"31.0065918",
				options: [
					"35.0065918",
					"31.0065918",
					"32.0065918",
					"30.0065918"
				]
			},
			{
				numb: 8,
				question: "How is the data stored on the diskette?",
				answear:"Magnetism",
				options: [
					"Ink",
					"Laser bubbles",
					"Magnetism",
					"Circuits"
				]
			},
			{
				numb: 9,
				question: "Which of the following is the smallest visual element on a video monitor?",
				answear:"Pixel",
				options: [
					"Character",
					"Pixel",
					"Byte",
					"Bit"
				]
			},
			{
				numb: 10,
				question: "Which of the following natural element is the primary element in computer chips?.",
				answear:"Silicon",
				options: [
					"Silicon",
					"Carbon",
					"Iron",
					"Uranium"
				]
			}
		]
	},
	{
		heading : 'Operating System (Windows)',
		imageLink : '../images/Operating System.png',
		pdfLink : '../pdf/OPERATING SYSTEMS  NOTES R18.pdf',
		tutorial : [{
			link : '<iframe src="https://www.youtube.com/embed/_-e_21njejs?si=ixjFeOGES8oQJTUd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Which of the following is not an operating system?",
				answear:"Oracle",
				options: [
					"Windows",
					"Linux",
					"Oracle",
					"DOS"
				]
			},
			{
				numb: 2,
				question: "What is the maximum length of the filename in DOS?",
				answear:"8",
				options: [
					"4",
					"5",
					"8",
					"12"
				]
			},
			{
				numb: 3,
				question: "When was the first operating system developed?",
				answear:"1950",
				options: [
					"1948",
					"1949",
					"1950",
					"1951"
				]
			},
			{
				numb: 4,
				question: "When were MS windows operating systems proposed?",
				answear:"1985",
				options: [
					"1994",
					"1990",
					"1992",
					"1985"
				]
			},
			{
				numb: 5,
				question: "Which of the following is the extension of Notepad?",
				answear:".txt",
				options: [
					".txt",
					".xls",
					".ppt",
					".bmp"
				]
			},
			{
				numb: 6,
				question: "What else is a command interpreter called?",
				answear:"shell",
				options: [
					"prompt",
					"kernel",
					"shell",
					"command"
				]
			},
			{
				numb: 7,
				question: "What is the full name of FAT?",
				answear:"File allocation table",
				options: [
					"File attribute table",
					"File allocation table",
					"Font attribute table",
					"Format allocation table"
				]
			},
			{
				numb: 8,
				question: "BIOS is used?",
				answear:"By operating system",
				options: [
					"By operating system",
					"By compiler",
					"By interpreter",
					"By application software"
				]
			},
			{
				numb: 9,
				question: "What is the mean of the Booting in the operating system?",
				answear:"Restarting computer",
				options: [
					"Restarting computer",
					"Install the program",
					"To scan",
					"To turn off"
				]
			},
			{
				numb: 10,
				question: "When does page fault occur?",
				answear:"The page does not present in memory.",
				options: [
					"The page is present in memory.",
					"The deadlock occurs.",
					"The page does not present in memory.",
					"The buffering occurs."
				]
			}
		]
	},
	{
		heading : 'Microsoft (Word)',
		imageLink : '../images/Word.png',
		pdfLink : '../pdf/Word-Basics-2007.pdf',
		tutorial : [{
			tab:'Home',
			link:'<iframe src="https://www.youtube.com/embed/GqyA5QfiJoQ?si=cRJbVp3BGvPk9RbC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Insert',
			link:'<iframe src="https://www.youtube.com/embed/awpduW14-cY?si=VjiQAk8As1u21cdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Page Layout',
			link:'<iframe src="https://www.youtube.com/embed/F64QyAz0hOA?si=n571ZV0LPDraWd8D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Microsoft word is ____ software",
				answear:"Application",
				options: [
					"Application",
					"Compiler",
					"System",
					"Programming"
				]
			},
			{
				numb: 2,
				question: "Which is not in MS Word?",
				answear:"Magic tool",
				options: [
					"Italic",
					"Magic tool",
					"Font",
					"Bold"
				]
			},
			{
				numb: 3,
				question: "____ cannot be used to work in MS Office.",
				answear:"Joystick",
				options: [
					"Joystick",
					"Scanner",
					"Light Pen",
					"Mouse"
				]
			},
			{
				numb: 4,
				question: "Which is not an edition of MS Word?",
				answear:"MS Word 1020",
				options: [
					"MS Word 2003",
					"MS Word 2007",
					"MS Word 2010",
					"MS Word 1020"
				]
			},
			{
				numb: 5,
				question: "The ___ works with the standard Copy and Paste commands.",
				answear:"Office Clipboard",
				options: [
					"View tab",
					"Paragraph dialog box",
					" Office Clipboard",
					"All of these"
				]
			},
			{
				numb: 6,
				question: "What is the blank space outside the printing area on a page?",
				answear:"Margins",
				options: [
					"Clipart",
					"Margins",
					"Header",
					"Footer"
				]
			},
			{
				numb: 7,
				question: "Which of the following is an example of page orientation?",
				answear:"Landscape",
				options: [
					"Landscape",
					"Subscript",
					"Superscript",
					"A4"
				]
			},
			{
				numb: 8,
				question: "Formatting is performed on",
				answear:"Both (a) and (b)",
				options: [
					"Text",
					"Table",
					"Menu",
					"Both (a) and (b)"
				]
			},
			{
				numb: 9,
				question: "Which of the following software is used for making a resume?",
				answear:"MS Word",
				options: [
					"MS Excel",
					"MS Word",
					"Dev C",
					"Java"
				]
			},
			{
				numb: 10,
				question: "Press ____ to open the help window in the MS Word document.",
				answear:"F1",
				options: [
					"F1",
					"F2",
					"F9",
					"F11"
				]
			}
		]
	},
	{
		heading : 'Microsoft (Excel)',
		imageLink : '../images/excel.png',
		pdfLink : '../pdf/Excel-Fundamentals-Manual.pdf',
		tutorial : [{
			tab:'Home',
			link:'<iframe src="https://www.youtube.com/embed/w7myTbYmmK8?si=DpIq0NZgvn3Q1tYR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Insert',
			link:'<iframe src="https://www.youtube.com/embed/Yt1y0JHYyzc?si=MYRFIe8SrcXv5poe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Page Layout',
			link:'<iframe src="https://www.youtube.com/embed/fw0H6Q4IgPY?si=Qjii1FhbS3DgjWfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Excel is a ____ program developed by Microsoft.",
				answear:"Spreadsheet",
				options: [
					"Spreadsheet",
					"Document",
					"Data management",
					"All of the above"
				]
			},
			{
				numb: 2,
				question: "What is the extension of a Microsoft Excel file?",
				answear:"xlsx",
				options: [
					"msxcl",
					"xcl",
					"xlsx",
					"xlsm"
				]
			},
			{
				numb: 3,
				question: "What is the default file name of Microsoft Excel file?",
				answear:"Workbook1.xlsx",
				options: [
					"Workbook.xlsx",
					"Workbook1.xlsx",
					"Worksheet.xlsx",
					"Worksheet1.xlsx"
				]
			},
			{
				numb: 4,
				question: "Shortcut key CTRL + D is used to ____.",
				answear:"Fill down in the selection",
				options: [
					"Open font dialog box",
					"Open format cells dialog box",
					"Shift current cell's value in the right cell",
					"Fill down in the selection"
				]
			},
			{
				numb: 5,
				question: "Microsoft Excel is used for?",
				answear:"All of the above",
				options: [
					"Data Entry",
					"Accounting",
					"Data Management",
					"All of the above"
				]
			},
			{
				numb: 6,
				question: "What is the collection of worksheets called?",
				answear:"Workbook",
				options: [
					"Ledger",
					"Book",
					"Testbook",
					"Workbook"
				]
			},
			{
				numb: 7,
				question: "The total number of rows in a worksheet?",
				answear:"1,048,576",
				options: [
					"Unlimited",
					"65,535",
					"1,048,576",
					"1,068,576"
				]
			},
			{
				numb: 8,
				question: "The total number of columns in a worksheet?",
				answear:"16,384",
				options: [
					"26",
					"256",
					"12,834",
					"16,384"
				]
			},
			{
				numb: 9,
				question: "What is the column width in a worksheet?",
				answear:"255 characters",
				options: [
					"26 characters",
					"128 characters",
					"255 characters",
					"256 characters"
				]
			},
			{
				numb: 10,
				question: "The total number of characters that a cell contains is?",
				answear:"32,767 characters",
				options: [
					"32,767 characters",
					"32,768 characters",
					"65,535 characters",
					"1,32,767 characters"
				]
			}
		]
	},
	{
		heading : 'Microsoft (Powerpoint)',
		imageLink : '../images/powerpoint.jpg',
		pdfLink : '../pdf/powerpoint_how_to.pdf',
		tutorial : [{
			tab:'Home',
			link:'<iframe src="https://www.youtube.com/embed/5R0Z5E4F8v0?si=7hR_7wfbJW3MWGAj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Insert Part - 1',
			link:'<iframe src="https://www.youtube.com/embed/Oefq68Cbf9A?si=HZ431mUQ_0aJ7PNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Insert Part - 2',
			link:'<iframe src="https://www.youtube.com/embed/P7NOE3a-4x0?si=N7zaIIVqv3G2Kfn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Design',
			link:'<iframe src="https://www.youtube.com/embed/yYvbWQxC8OU?si=B7gwlgEpokfT86IC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		},
		{
			tab:'Animations',
			link:'<iframe src="https://www.youtube.com/embed/Mq_sYiDaZ9s?si=ABJPk57i5f0w-a9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "In MS PowerPoint presentations, the designs regulate the layout and formatting for the slide. These are commonly known as:",
				answear:"Templates",
				options: [
					"Blueprints",
					"Placeholders",
					"Templates",
					"Design Plates"
				]
			},
			{
				numb: 2,
				question: "The Handout Master consists of placeholders for all of these except the:",
				answear:"title",
				options: [
					"title",
					"slide number",
					"header",
					"footer"
				]
			},
			{
				numb: 3,
				question: "Which of these PowerPoint features would allow any user to create a given simple presentation quicker?",
				answear:"AutoContent Wizard",
				options: [
					"Animations",
					"Chart Wizard",
					"Transition Wizard",
					"AutoContent Wizard"
				]
			},
			{
				numb: 4,
				question: "The File that consists of readymade styles that we can easily use for our presentation is known as:",
				answear:"Template",
				options: [
					"Pre formatting",
					"Template",
					"Wizard",
					"AutoStyle"
				]
			},
			{
				numb: 5,
				question: "What is the max Zoom percentage in MS PowerPoint?",
				answear:"400%",
				options: [
					"400%",
					"300%",
					"200%",
					"100%"
				]
			},
			{
				numb: 6,
				question: "A PowerPoint design template is stored in any file with __________ extensions.",
				answear:".pot",
				options: [
					".pot",
					".ptt",
					".dtp",
					".ppt"
				]
			},
			{
				numb: 7,
				question: "Which of these options in PowerPoint would allow us to carry any set of slides from a given computer to another one?",
				answear:"Pack and Go",
				options: [
					"Web and Go",
					"Pack and Go",
					"Save and Go",
					"Save As"
				]
			},
			{
				numb: 8,
				question: "Which of these is a type of sound file?",
				answear:"WAV files",
				options: [
					"DAT files",
					"LOG files",
					"DRV files",
					"WAV files"
				]
			},
			{
				numb: 9,
				question: "In the current presentation, if we want to insert a new slide, we can choose which of these?",
				answear:"Ctrl + M",
				options: [
					"Ctrl + F",
					"Ctrl + O",
					"Ctrl + M",
					"Ctrl + N"
				]
			},
			{
				numb: 10,
				question: "Which of these terms do we use when an image in a clip art changes the direction that it was originally facing?",
				answear:"Rotate",
				options: [
					"Mirror",
					"Rotate",
					"Flip",
					"Group"
				]
			}
		]
	},
	{
		heading : 'C - language',
		imageLink : '../images/c_langauge.png',
		pdfLink : '../pdf/C_Complete_Notes.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/irqbmMNs2Bo?si=68W5UjwADxdc3GPa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Which of these is NOT a relational or logical operator?",
				answear:"=",
				options: [
					"=",
					"||",
					"==",
					"!="
				]
			},
			{
				numb: 2,
				question: "Out of the following, which one is not valid as an if-else statement?",
				answear:"if (if (x == 1)){}",
				options: [
					"if ((char) x){}",
					"if (x){}",
					"if (func1 (x)){}",
					"if (if (x == 1)){}"
				]
			},
			{
				numb: 3,
				question: "We cannot use the keyword ‘break’ simply within _________.",
				answear:"if-else",
				options: [
					"while",
					"for",
					"if-else",
					"do-while"
				]
			},
			{
				numb: 4,
				question: "The global variables are ____________.",
				answear:"External",
				options: [
					"External",
					"Internal",
					"Both External and Internal",
					"None of the above"
				]
			},
			{
				numb: 5,
				question: "Out of the following operations, which one is not possible in the case of a register variable?",
				answear:"All of the above",
				options: [
					"Global declaration of the register variable",
					"Copying the value from the memory variable",
					"Reading any value into the register variable",
					"All of the above"
				]
			},
			{
				numb: 6,
				question: "The #include <stdio.h> is a ______________.",
				answear:"Preprocessor directive",
				options: [
					"Inclusion directive",
					"File inclusion directive",
					"Preprocessor directive",
					"None of the above"
				]
			},
			{
				numb: 7,
				question: "Which of these properties of #define is false?",
				answear:"All of the above",
				options: [
					"These always obey the scope rules",
					"We can make use of a pointer to #define",
					"The #define can be externally available",
					"All of the above"
				]
			},
			{
				numb: 8,
				question: "The correct format of declaring a function is:",
				answear:"type_of_return name_of_function (argument type);",
				options: [
					"type_of_return name_of_function (argument type);",
					"type_of_return name_of_function (argument type){}",
					"type_of_return (argument type) name_of_function;",
					"all of the above"
				]
			},
			{
				numb: 9,
				question: "Out of the following snippet, which one will generate random numbers effectively?",
				answear:"rand();",
				options: [
					"rand(time(NULL));",
					"rand(10);",
					"rand();",
					"all of the above"
				]
			},
			{
				numb: 10,
				question: "We can achieve the modulus for float by:",
				answear:"fmod(x, y);",
				options: [
					"x % y",
					"modulus(x, y);",
					"fmod(x, y);",
					"mod(x, y);"
				]
			}
		]
	},
	{
		heading : 'Internet & e mailing',
		imageLink : '../images/internate.png',
		pdfLink : '../pdf/Internet.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/AuFD7BHBgcw?si=eF_yy1X6oLuLCoEC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "What is the internet?",
				answear:"Network connecting computers all over the world",
				options: [
					"Programming language",
					"Network connecting computers all over the world",
					"Computer program to transfer data",
					"All of these"
				]
			},
			{
				numb: 2,
				question: "What is e-mail?",
				answear:"Method of exchanging messages via electronic devices",
				options: [
					"Method of exchanging messages via electronic devices",
					"Speed message transfer to location",
					"Musical messaging service",
					"None of these"
				]
			},
			{
				numb: 3,
				question: "E-mail stands for?",
				answear:"Electronic mail",
				options: [
					"Electrical mail",
					"Electronic messaging service",
					"Electronic mail",
					"All of these"
				]
			},
			{
				numb: 4,
				question: "What does WWW stand for?",
				answear:"World Wide Web",
				options: [
					"Working window web",
					"Web window word",
					"World Wide Web",
					"None of these"
				]
			},
			{
				numb: 5,
				question: "What is the URL of a website?",
				answear:"It is the location of website on internet",
				options: [
					"It is the location of website on internet",
					"It is used to create internet",
					"It is location of peripheral on internet",
					"All of the above"
				]
			},
			{
				numb: 6,
				question: "Putting files to the server from the computer is?",
				answear:"Uploading",
				options: [
					"Downloading",
					"Uploading",
					"Trashing",
					"Transferring"
				]
			},
			{
				numb: 7,
				question: "What does FTP stand for?",
				answear:"File Transfer Protocol",
				options: [
					"Folder Text Protocol",
					"File Transfer Push",
					"Fixed Terminology Placement",
					"File Transfer Protocol"
				]
			},
			{
				numb: 8,
				question: "The address of a website is also known as?",
				answear:"URL",
				options: [
					"Location",
					"Mail id",
					"URL",
					"None of these"
				]
			},
			{
				numb: 9,
				question: "Which of these is a non-profit domain?",
				answear:".org",
				options: [
					".com",
					".in",
					".org",
					"all of the above"
				]
			},
			{
				numb: 10,
				question: "The World Wide Web (WWW) was invented by ___.",
				answear:"Tim Berners Lee",
				options: [
					"Steve Jobs",
					"Tim Berners Lee",
					"Ray Tomliners",
					"All of these"
				]
			}
		]
	},
	{
		heading : 'HTML',
		imageLink : '../images/html.png',
		pdfLink : '../pdf/HTML_Complete_Notes.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/BsDoLVMnmZs?si=5fFDus936rCTwDiZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Whichof these elements in HTML can be used for making a text bold?",
				answear:"< b >",
				options: [
					"< a >",
					"< pre >",
					"< br >",
					"< b >"
				]
			},
			{
				numb: 2,
				question: "Which tag do we use in HTML for inserting a line-break?",
				answear:"< br >",
				options: [
					"< a >",
					"< pre >",
					"< br >",
					"< b >"
				]
			},
			{
				numb: 3,
				question: "How to create a hyperlink in HTML?",
				answear:"< a href = “www.thinkandlearn.com”> thinkandlearn.com </a >",
				options: [
					"< a link = “www.thinkandlearn.com”> thinkandlearn.com </a >",
					"< a> www.thinkandlearn.com <thinkandlearn.com /a > ",
					"< a href = “www.thinkandlearn.com”> thinkandlearn.com </a >",
					"< a url = “www.thinkandlearn.com” thinkandlearn.com /a >"
				]
			},
			{
				numb: 4,
				question: "In HTML, how do we insert an image?",
				answear:"< img src = “jtp.png” />",
				options: [
					"< img src = “jtp.png” />",
					"< img href = “jtp.png” />",
					"< img link = “jtp.png” />",
					"< img url = “jtp.png” />"
				]
			},
			{
				numb: 5,
				question: "Which tag do we use to define the options present in the drop-down selection lists?",
				answear:"< option >",
				options: [
					"< list >",
					"< option >",
					"< dropdown >",
					"< select >"
				]
			},
			{
				numb: 6,
				question: "In HTML, which of these would add a background color?",
				answear:"< marquee bgcolor = “red” >",
				options: [
					"< marquee bgcolor = “red” >",
					"< marquee bg color: “plum” >",
					"< marquee color = “plum” >",
					"< marquee bg-color = “plum” >"
				]
			},
			{
				numb: 7,
				question: "Which HTML tag do we use to display text along with a scrolling effect?",
				answear:"< marquee >",
				options: [
					"< div >",
					"< scroll >",
					"< marquee >",
					"None of the above"
				]
			},
			{
				numb: 8,
				question: "In HTML, we use the <hr> tag for ___________.",
				answear:"horizontal ruler",
				options: [
					"horizontal ruler",
					"new line",
					"new paragraph",
					"vertical ruler"
				]
			},
			{
				numb: 9,
				question: "What is the correct way of sending mail in HTML?",
				answear:"< a href = “mailto: ab@b” >",
				options: [
					"< mail ab@b</mail >",
					"< a href = “ab@b” >",
					"< a href = “mailto: ab@b” >",
					"None of the above"
				]
			},
			{
				numb: 10,
				question: "Which tag is used in HTML5 for the initialization of the document type?",
				answear:"< !DOCTYPE html >",
				options: [
					"< Doctype HTML >",
					"< !DOCTYPE html >",
					"< Doctype >",
					"< \\Doctype html >"
				]
			}
		]
	},
	{
		heading : 'DTP (Photoshop)',
		imageLink : '../images/photoshop.png',
		pdfLink : '../pdf/photoshop_reference.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/SdodDYuXCQw?si=XRoQ32xSfWT5V3W9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: " ____ editing software Photoshop uses raster-based images to edit photos.",
				answear:"Photo",
				options: [
					"Photo",
					"Video",
					"Both A and B",
					"None of the above"
				]
			},
			{
				numb: 2,
				question: "Several graphical and digital artworks can be ____ using Photoshop.",
				answear:"All of the above",
				options: [
					"Created",
					"Edited",
					"Manipulated",
					"All of the above"
				]
			},
			{
				numb: 3,
				question: "Adobe Systems develops Photoshop, which is available for ____.",
				answear:"Both A and B",
				options: [
					"Windows",
					"Mac OS",
					"Both A and B",
					"None of the above"
				]
			},
			{
				numb: 4,
				question: "Photoshop files are usually saved as ___ files.",
				answear:"< img src = “jtp.png” />",
				options: [
					"JPG",
					"PDF",
					"PNG",
					"PSD"
				]
			},
			{
				numb: 5,
				question: "What does PSD stand for?",
				answear:"Photoshop Document",
				options: [
					"Photoshop Shopping document",
					"Photoshop Document",
					"Photoshop Digital",
					"Photoshop Shopping Digital"
				]
			},
			{
				numb: 6,
				question: "Which of the following is/are the feature(s) of Photoshop?",
				answear:"All of the above",
				options: [
					"Smart Objects",
					"Slice Tool",
					"Shapes",
					"All of the above"
				]
			},
			{
				numb: 7,
				question: "Working with ____ allows you to create independent pieces of paper that can be edited independently and later added to.",
				answear:"Layers",
				options: [
					"Layers",
					"Smart Objects",
					"Slice Tool",
					"Shapes"
				]
			},
			{
				numb: 8,
				question: "Layer Palettes in Photoshop have a variety of features to help you work with them, such as ____, and locking.",
				answear:"All of the above",
				options: [
					"Opacity (transparency)",
					"Layer Masks",
					"Blending Modes",
					"All of the above"
				]
			},
			{
				numb: 9,
				question: "Photoshop's workspace represents its ____.",
				answear:"User Interface",
				options: [
					"Backend",
					"User Interface",
					"Website",
					"Space"
				]
			},
			{
				numb: 10,
				question: "____ is the name of the default Photoshop workspace.",
				answear:"Essentials",
				options: [
					"Enumeration",
					"Essentials",
					"Establishment",
					"Estrange"
				]
			}
		]
	},
	{
		heading : 'C++ Programming',
		imageLink : '../images/c++.png',
		pdfLink : '../pdf/c++_note.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/yGB9jhsEsr8?si=Kxx3W61WrRnE4AvV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Which of the following is the correct syntax to add the header file in the C++ program?",
				answear:"Both A and B",
				options: [
					"#include<userdefined>",
					"#include 'userdefined.h'",
					"Both A and B",
					"<include> 'userdefined.h'"
				]
			},
			{
				numb: 2,
				question: "Which of the following is the correct syntax to print the message in C++ language?",
				answear:"cout <<'Hello world!';",
				options: [
					"cout <<'Hello world!';",
					"Cout << Hello world! ;",
					"Out <<'Hello world!;'",
					"None of the above"
				]
			},
			{
				numb: 3,
				question: "Which of the following is the correct identifier?",
				answear:"VAR_123",
				options: [
					"$var_name",
					"VAR_123",
					"varname@",
					"None of the above"
				]
			},
			{
				numb: 4,
				question: "Which of the following is the address operator?",
				answear:"&",
				options: [
					"@",
					"%",
					"&",
					"#"
				]
			},
			{
				numb: 5,
				question: "Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
				answear:"All of the above",
				options: [
					"Encapsulation",
					"Inheritance",
					"Polymorphism",
					"All of the above"
				]
			},
			{
				numb: 6,
				question: "The programming language that has the ability to create new data types is called___.",
				answear:"Extensible",
				options: [
					"Overloaded",
					"Encapsulated",
					"Reprehensible",
					"Extensible"
				]
			},
			{
				numb: 7,
				question: "Which of the following is the original creator of the C++ language?",
				answear:"Bjarne Stroustrup",
				options: [
					"Dennis Ritchie",
					"Ken Thompson",
					"Bjarne Stroustrup",
					"Brian Kernighan"
				]
			},
			{
				numb: 8,
				question: "Which of the following is the correct syntax to read the single character to console in the C++ language?",
				answear:"get(ch)",
				options: [
					"Read ch()",
					"Getline vh()",
					"get(ch)",
					"Scanf(ch)"
				]
			},
			{
				numb: 9,
				question: "Which of the following statements is correct about the formal parameters in C++?",
				answear:"Parameters with which functions are called",
				options: [
					"Parameters with which functions are called",
					"Parameters which are used in the definition of the function",
					"Variables other than passed parameters in a function",
					"Variables that are never used in the function"
				]
			},
			{
				numb: 10,
				question: "The C++ language is ______ object-oriented language.",
				answear:"Semi Object-oriented or Partial Object-oriented",
				options: [
					"Pure Object oriented",
					"Not Object oriented",
					"Semi Object-oriented or Partial Object-oriented",
					"None of the above"
				]
			}
		]
	},
	{
		heading : 'Accounting Through Tally with GST',
		imageLink : '../images/tally.png',
		pdfLink : '../pdf/Tally Notes Computer Training- sscstudy.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/gOmL4-sUJ2g?si=x7bFuSFReDKrl2nJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Sales Tax Ledger falls under which Group?",
				answear:"Duties and Taxes",
				options: [
					"Sales",
					"Purchases",
					"Indirect Expenses",
					"Duties and Taxes"
				]
			},
			{
				numb: 2,
				question: "The shortcut key to quit from Tally is",
				answear:"Ctrl + Q",
				options: [
					"Ctrl + Q",
					"Ctrl + M",
					"Ctrl + P",
					"Ctrl + L"
				]
			},
			{
				numb: 3,
				question: "What is the full form of TCS?",
				answear:"Tax Collected at Source",
				options: [
					"Tax Collected at Source",
					"Tax collected from Sales",
					"Tax Consumption at Source@",
					"Tax Collected by Staff"
				]
			},
			{
				numb: 4,
				question: "What is TAN?",
				answear:"Tax Assessment Number",
				options: [
					"Tax Absorb Number",
					"Tax Assignment Number",
					"Tax Account Number",
					"Tax Assessment Number"
				]
			},
			{
				numb: 5,
				question: "The shortcut used for Sales Order is",
				answear:"Alt + F5",
				options: [
					"Alt + F4",
					"Alt + F5",
					"Alt + F1",
					"Alt + F6"
				]
			},
			{
				numb: 6,
				question: "Voucher class is a pre-defined voucher type that helps to",
				answear:"All of these",
				options: [
					"Automatic Entry",
					"Automatic Calculatio",
					"Minimize Errors",
					"All of these"
				]
			},
			{
				numb: 7,
				question: "What is the utility of Tally Vault Password?",
				answear:"It will not shows the company name in the company select list",
				options: [
					"It will not shows the company name in the company select list",
					"It will lock all voucher entries for that company",
					"It will lock the period of company",
					"Both a and b"
				]
			},
			{
				numb: 8,
				question: "Service Tax Report can be seen from",
				answear:"Display > Statutory Reports",
				options: [
					"Display > Statutory Reports",
					"Display > Statutory Masters",
					"Display > Account Books",
					"Display > Day Book"
				]
			},
			{
				numb: 9,
				question: "At the time of Branch Transfer, Sales ledger is created under which Vat/Tax Class?",
				answear:"Consignment/Branch Transfer Outward",
				options: [
					"Sales with Vat rate",
					"Export",
					"Consignment/Branch Transfer Outward",
					"All of these"
				]
			},
			{
				numb: 10,
				question: "Discount Column is available in",
				answear:"Both b and c",
				options: [
					"Accounting Voucher",
					"Sales Invoice",
					"Purchase Invoice",
					"Both b and c"
				]
			}
		]
	},
	{
		heading : 'DBMS (Data Base Management System)',
		imageLink : '../images/dbms.png',
		pdfLink : '../pdf/DBMS.pdf',
		tutorial : [{
			link :'<iframe src="https://www.youtube.com/embed/dl00fOOYLOM?si=AczeaBx9sKVvroiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
		}],
		questions :[
			{
				numb: 1,
				question: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
				answear:"DDL(Data Definition Language)",
				options: [
					"DML(Data Manipulation Language)",
					"Query",
					"Relational Schema",
					"DDL(Data Definition Language)"
				]
			},
			{
				numb: 2,
				question: "Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
				answear:"DML(Data Manipulation Language)",
				options: [
					"DML(Data Manipulation Language)",
					"DDL(Data Definition Language)",
					"Query",
					"Relational Schema"
				]
			},
			{
				numb: 3,
				question: "Which one of the following given statements possibly contains the error?",
				answear:"select empid where empid = 1009 and Lastname = 'GELLER';",
				options: [
					"select * from emp where empid = 10003;",
					"select empid from emp where empid = 10006;",
					"select empid from emp;",
					"select empid where empid = 1009 and Lastname = 'GELLER';"
				]
			},
			{
				numb: 4,
				question: "What do you mean by one to many relationships?",
				answear:"One teacher can have many classes",
				options: [
					"One class may have many teachers",
					"One teacher can have many classes",
					"Many classes may have many teachers",
					"Many teachers may have many classes"
				]
			},
			{
				numb: 5,
				question: "A Database Management System is a type of _________software.",
				answear:"It is a type of system software",
				options: [
					"It is a type of system software",
					"It is a kind of application software",
					"It is a kind of general software",
					"Both A and C"
				]
			},
			{
				numb: 6,
				question: "The term 'FAT' is stands for_____",
				answear:"File Allocation Table",
				options: [
					"File Allocation Tree",
					"File Allocation Table",
					"File Allocation Graph",
					"All of the above"
				]
			},
			{
				numb: 7,
				question: "Which of the following can be considered as the maximum size that is supported by FAT?",
				answear:"4GB",
				options: [
					"8GB",
					"4GB",
					"4TB",
					"None of the above"
				]
			},
			{
				numb: 8,
				question: "The term 'NTFS' refers to which one of the following?",
				answear:"New Technology File System",
				options: [
					"New Technology File System",
					"New Tree File System",
					"New Table type File System",
					"Both A and C"
				]
			},
			{
				numb: 9,
				question: "Which of the following can be considered as the maximum size that is supported by NTFS?",
				answear:"4GB",
				options: [
					"4GB",
					"16TB",
					"64TB",
					"8TB"
				]
			},
			{
				numb: 10,
				question: "A huge collection of the information or data accumulated form several different sources is known as ________:",
				answear:"Data Warehouse",
				options: [
					"Data Management",
					"Data Mining",
					"Data Warehouse",
					"Both B and C"
				]
			}
		]
	}
]

// let randomIndex = [];

// while (randomIndex.length != allData.questions.length) {
//     let randomNum = Math.floor(Math.random() * allData.questions.length);
//     if (randomNum == allData.questions.length) {
//         randomNum--;
//     }

//     if (!randomIndex.includes(randomNum)) {
//         randomIndex.push(randomNum);
//     }

// }

// console.log(randomIndex);

// console.log(allData)

let ihtml = "";
var counter;
var counter1;
var counterLine;
var userScore = 0;
let tickIcon = '<div class="icon tick"><svg width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></div>';
//<div class="icon tick"><i class="fa fa-check"></i></div>
let crossIcon = '<div class="icon cross"><svg width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>';
//<div class="icon cross"><i class="fa fa-times"></i></div>
var option_list
let next_btn

for(var i in allData){

	ihtml += `
		<div class="note-box">
            <div class="wri">
                ${allData[i].heading}
            </div>
            <div class="logo-con">
                <img src="${allData[i].imageLink}" alt="">
            </div>
            <div class="btn-con">
                <button class="con-btn"><a href="${allData[i].pdfLink}"
                        download="${allData[i].heading}">Download</a></button>
                <button class="con-btn" id="tutorialId" onclick="openTutorial(${i})">Tutorial</button>
                <button class="con-btn" id="examBtnId" onclick="openExam(${i})">Exam</button>
            </div>
       </div>
    `	        
}

let mainContent = document.getElementById('mainContent');
mainContent.innerHTML = ihtml


let contaner = document.getElementById('mainContaner');
let hidebg = document.getElementById('hidebgId');
let tutorialId = document.getElementById('tutorialId')


const videoSection = () =>{
	contaner.style.display = 'block'
}

let video = document.getElementById('videoTutorial')

const croseBtn = () =>{
	contaner.style.display = 'none'
	video.innerHTML = ""
}



const openTutorial = (i) =>{
	let	videoPage = ""
    for(let j = 0; j < allData[i].tutorial.length; j++){
        videoPage += `
            <div class="rite">${allData[i].heading ? allData[i].heading : ""}</div>
            <div class="pla-video">
                ${allData[i].tutorial[j].tab == null ? "" : `<div class="navegate">${allData[i].tutorial[j].tab}</div>`}
                <div class="video-play">
                    ${allData[i].tutorial[j].link}
                </div>
            </div>
        `
        // console.log(allData[i].tutorial[j])
    }
	video.innerHTML = videoPage
	contaner.style.display = 'block';
    hidebg.style.display = 'block';
    document.getElementsByClassName('main-sec')[0].style.display = 'block';
}


let crossDiv = document.getElementById('crossDiv');

crossDiv.onclick = () => {
	document.getElementsByClassName('main-sec')[0].style.display = 'none';
	hidebg.style.display = 'none';
	videoPage = null
}


// exam function
let showExam = document.getElementById('examContaner')
const openExam = (i) =>{
	let examPage = ""

		examPage = `
			<div class="rite">${allData[i].heading}</div>
		`
		showExam.innerHTML = examPage
	
		//getting all required elements.
		const start_btn = document.querySelector(".start_btn button");
		const info_box = document.querySelector(".info_box");
		const exit_btn = info_box.querySelector(".buttons .quit");
		const continue_btn = info_box.querySelector(".buttons .restart");
		const quiz_box = document.querySelector(".quiz_box");
		const timeCount = quiz_box.querySelector(".timer .timer_sec");
		const timeLine = quiz_box.querySelector("header .time_line");
		const timeOff = quiz_box.querySelector("header .time_text");
		var elem = document.documentElement;
		var name1 = "";

		option_list = document.querySelector(".option_list");

		function fun1() {
		    name1 = document.getElementById('nameId').value;
		}
		function fun2() {
		    document.getElementById("showArea").innerHTML = name1;
		}

		//if Start Exam Button Clicked
		start_btn.onclick = () => {
		    info_box.classList.add("activeInfo"); //show the info box
		}

		//if exit Button Clicked
		exit_btn.onclick = () => {
		    info_box.classList.remove("activeInfo"); //hidden the info box
		}

		//if continue Button Clicked
		continue_btn.onclick = () => {
		    info_box.classList.remove("activeInfo"); //hidden the info box
		    quiz_box.classList.add("activeQuiz"); //Show the exam box
		    showQuestions(0);
		    queCounter(1);
		    startTimer(30); //startTimer(15)
		    startTimerLine(0);
		}

		var que_count = 0;
		var que_numb = 1;
		
		var timeValue = 30; //timeValue = 15
		var widthValue = 0;
		userScore = 0;

		next_btn = quiz_box.querySelector(".next_btn");
		const result_box = document.querySelector(".result_box");
		const restart_quiz = result_box.querySelector(".buttons .restart");
		const quit_quiz = result_box.querySelector(".buttons .quit");

		restart_quiz.onclick = () => {
		    var btn1 = document.getElementById('printId');
		    var button2 = document.getElementById('quiteExam');
		    btn1.style.visibility = "hidden";
		    button2.style.visibility = "hidden";
		    window.print();

		    setTimeout(shoePrint, 1000);
		    function shoePrint() {
		        btn1.style.visibility = "visible";
		        button2.style.visibility = "visible";
		        elem.requestFullscreen();
		    }
		}

		quit_quiz.onclick = () => {
		    window.location.reload();
		}

		//if next button clicked
		next_btn.onclick = () => {
		    clearInterval(counter1);
		    if (que_count < allData[i].questions.length - 1) {
		        que_count++;
		        que_numb++;
		        showQuestions(que_count);
		        queCounter(que_numb);
		        clearInterval(counter);
		        startTimer(timeValue);
		        clearInterval(counterLine);
		        startTimerLine(widthValue);
		        next_btn.style.display = "none";
		        timeOff.textContent = "Time Left";
		    } else {
		        clearInterval(counter);
		        clearInterval(counterLine);
		        console.log('Question complete');
		        next_btn.innerHTML = 'Result';
		        showResultBox();
		    }
		}

		function nextQuestion() {
		    if (que_count < allData[i].questions.length - 1) {
		        que_count++;
		        que_numb++;
		        showQuestions(que_count);
		        queCounter(que_numb);
		        clearInterval(counter);
		        startTimer(timeValue);
		        clearInterval(counterLine);
		        startTimerLine(widthValue);
		        next_btn.style.display = "none";
		        timeOff.textContent = "Time Left";
		    } else {
		        clearInterval(counter);
		        clearInterval(counterLine);
		        console.log('Question complete');
		        showResultBox();
		    }
		}

		//getting question and option for array
		function showQuestions(index) {
		    let index2 = index;
		    const que_text = document.querySelector(".que_text");
		    let que_tag = '<span>' + (Number(index) + 1) + ". " + allData[i].questions[index2].question + '</span>';
		    let option_tag = '<div class="option">' + allData[i].questions[index2].options[0] + '<span></span></div>'
		        + '<div class="option">' + allData[i].questions[index2].options[1] + '<span></span></div>'
		        + '<div class="option">' + allData[i].questions[index2].options[2] + '<span></span></div>'
		        + '<div class="option">' + allData[i].questions[index2].options[3] + '<span></span></div>'
		    que_text.innerHTML = que_tag;
		    option_list.innerHTML = option_tag;
		    const option = option_list.querySelectorAll(".option");
		    for (let j = 0; j < option.length; j++) {
		        option[j].setAttribute("onclick", "optionSelected1(this,"+i+","+index+")");
		    }
		}

		// let tickIcon = '<div class="icon tick"><svg width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></div>';
		// //<div class="icon tick"><i class="fa fa-check"></i></div>
		// let crossIcon = '<div class="icon cross"><svg width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>';
		// //<div class="icon cross"><i class="fa fa-times"></i></div>

		




		function showResultBox() {
		    info_box.classList.remove("activeInfo"); //hidden the info box
		    quiz_box.classList.remove("activeQuiz"); //hide the exam box.
		    result_box.classList.add("activeResult"); //Show the result box.
		    const scoreText = result_box.querySelector(".score_text");
		    const tq = allData[i].questions.length;
		    if (userScore >= (90 * tq) / 100) {
		        let scoreTag = '<span> Outstanding, <p id="showArea"></p><span class="grade">(AA)</span>. You got <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (80 * tq) / 100) {
		        let scoreTag = '<span> Excellent, <p id="showArea"></p><span class="grade">(A+)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (70 * tq) / 100) {
		        let scoreTag = '<span> Very Good, <p id="showArea"></p><span class="grade">(A)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (60 * tq) / 100) {
		        let scoreTag = '<span> Good, <p id="showArea"></p><span class="grade">(B+)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (50 * tq) / 100) {
		        let scoreTag = '<span> Satisfactory, <p id="showArea"></p><span class="grade">(B)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (40 * tq) / 100) {
		        let scoreTag = '<span> Average , <p id="showArea"></p><span class="grade">(C+)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else if (userScore >= (25 * tq) / 100) {
		        let scoreTag = '<span> Marginal, <p id="showArea"></p><span class="grade">(C)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    else {
		        let scoreTag = '<span> Fail, <p id="showArea"></p><span class="grade">(D)</span>. You got only <p>' + userScore + '</p> out of <p>' + allData[i].questions.length + '</p></span>';
		        scoreText.innerHTML = scoreTag;
		    }
		    fun2()
		}

		function startTimer(time) {
		    counter = setInterval(timer, 1000);
		    function timer() {
		        timeCount.textContent = time;
		        time--;
		        if (time < 9) {
		            let addZero = timeCount.textContent;
		            timeCount.textContent = "0" + addZero;
		        }
		        if (time < 0) {
		            clearInterval(counter);
		            timeCount.textContent = '00';
		            timeOff.textContent = "Time Off";

		            let correctAns = allData[i].questions[que_count].answear;
		            let alloptions = option_list.children.length;

		            for (let j = 0; j < alloptions; j++) {
		                if (option_list.children[j].textContent == correctAns) {
		                    option_list.children[j].setAttribute("class", "option correct");
		                    option_list.children[j].insertAdjacentHTML("beforeend", tickIcon);
		                }
		            }
		            for (let j = 0; j < alloptions; j++) {
		                option_list.children[j].classList.add("disabled");
		            }
		            next_btn.style.display = "block";
		            counter1 = setTimeout(nextQuestion, 5000);
		        }
		    }
		}

		function startTimerLine(time) {
		    counterLine = setInterval(timer, 56);//(timer, 29)
		    function timer() {
		        time += 1;
		        timeLine.style.width = time + "px";
		        if (time > 549) {
		            clearInterval(counterLine);
		        }
		    }
		}

		function queCounter(index) {
		    const bottom_ques_counter = quiz_box.querySelector(".total_que");
		    let totalQuesCounTag = '<span><p>' + index + '</p>of<p>' + allData[i].questions.length + '</p>Questions</span>';
		    bottom_ques_counter.innerHTML = totalQuesCounTag;
		}


	hidebg.style.display = 'block';
    secDiv.style.display = 'block';
}

const closeBtn = () =>{
	secDiv.style.display = 'none';
    hidebg.style.display = 'none';
}

// full screen function
let elem = document.documentElement;
setInterval(checkFullScreen, 2000);
var count = 0
function checkFullScreen() {
    if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
        examDiv.style.background = 'lightblue'
        examDiv.style.height = '100%'
        examDiv.style.width = '100%'
        closButton.style.display = 'none'
        sCloseB.style.display = 'none'
    }
    else {
        examDiv.style.background = '#fff'
        examDiv.style.height = '90%'
        examDiv.style.width = '80%'
        closButton.style.display = 'block'
        sCloseB.style.display = 'block'
        document.getElementById('popup_boxId').style.display = 'block';
        count = count + 1
    }
}

function clickWarning() {
    document.getElementById('popup_boxId').style.display = 'none';
    elem.requestFullscreen();
}

function cheting() {
    document.getElementById('popup_Id').style.display = 'block';
}
function hide() {
    document.getElementById('popup_Id').style.display = 'none';
}





function optionSelected1(answer, i, que_count) {
	console.log('click')
	// alert()
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = allData[i].questions[que_count].answear;
    let alloptions = 4; //option_list.children.length
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answers is incorrect then automtically selected the correct answer
        for (let j = 0; j < alloptions; j++) {
            if (option_list.children[j].textContent == correctAns) {
                option_list.children[j].setAttribute("class", "option correct");
                option_list.children[j].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    //once user selected disabled all options
    for (let j = 0; j < alloptions; j++) {
        option_list.children[j].classList.add("disabled");
    }
    if (que_count == allData[i].questions.length - 1) {
        next_btn.innerHTML = 'Submit';
    }
    next_btn.style.display = "block";
    // counter1 = setTimeout(nextQuestion, 5000);
}


