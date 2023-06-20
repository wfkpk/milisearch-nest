import { Injectable } from '@nestjs/common';
import MeiliSearch from 'meilisearch';
@Injectable()
export class SearchService {
  private _client: MeiliSearch;

  constructor() {
    this._client = new MeiliSearch({
      host: 'http://localhost:7700',
      apiKey: 'KWG2Ixy9AiOdgCkbrpAK5UFBp9XFPIRxXcBpNlCvskA',
    });
  }

  async search(query: string) {
    const index = await this._client.getIndex('podcast');
    const search = await index.search(query, {
      limit: 20,
      attributesToHighlight: ['name', 'about'],
    });
    return search;
  }

  async addDocuments() {
    const index = await this._client.index('podcast');
    const documents = [
      {
        id: 1,
        name: 'Flutter 101 Podcast',
        link: 'https://flutter101.dev/',
        about:
          'Weekly podcast focusing on software development with Flutter and Dart. Hosted by Vince Varga.',
      },
      {
        id: 2,
        name: '.NET Rocks!',
        link: 'https://www.dotnetrocks.com/',
        about:
          ' The internet audio talk show for .NET developer with Carl Franklin and Richard Campbell.',
      },
      {
        id: 3,
        name: '/dev/hell',
        link: 'http://devhell.info/',
        about:
          ' Chris Hartjes and Ed Finkler are trapped in Development Hell, where they talk mostly about PHP, web, their development experiences and also with special guests. (Ceased production 2020)',
      },
      {
        id: 4,
        name: 'a16z Podcast',
        link: 'https://a16z.com/podcasts/',
        about:
          ' A podcast discusses tech and culture trends, news, and the future.',
      },
      {
        id: 5,
        name: 'Accidental Tech Podcast',
        link: 'http://atp.fm/',
        about:
          ' Three nerds discussing tech, Apple, programming, and loosely related matters.',
      },
      {
        id: 6,
        name: 'Ada Lovelace Day',
        link: 'https://findingada.com/',
        about:
          'lovelace-day-podcast/id1119310112) - Achievements of women in science, technology, engineering and maths (STEM).',
      },
      {
        id: 7,
        name: 'AdminAdmin Podcast',
        link: 'https://adminadminpodcast.co.uk',
        about:
          ' A podcast about system administration and (increasingly) DevOps and Cloud operations.',
      },
      {
        id: 8,
        name: 'Android Developers Backstage',
        link: 'http://androidbackstage.blogspot.com/',
        about:
          ' Android Backstage, a podcast by and for Android developers. Hosted by developers from the Android engineering team, this show covers topics of interest to Android programmers, with in-depth discussions and interviews with engineers on the Android team at Google.',
      },
      {
        id: 9,
        name: 'Around IT In 256 Seconds',
        link: 'https://256.nurkiewicz.com/',
        about:
          ' Podcast for developers, testers, SREs… and their managers. I explain complex and convoluted technologies in a clear way, avoiding buzzwords and hype. Never longer than 4 minutes and 16 seconds.',
      },
      {
        id: 10,
        name: 'Away From The Keyboard',
        link: 'http://awayfromthekeyboard.com/category/podcasts/',
        about:
          ' Away From The Keyboard is where technologists tell their stories of how they started, how they grew, how they learned, and how they unwind.',
      },
      {
        id: 11,
        name: 'Away from Keyboard',
        link: 'https://changelog.com/afk',
        about: '',
      },
      {
        id: 12,
        name: 'Azure Friday',
        link: 'https://channel9.msdn.com/Shows/Azure-Friday',
        about:
          'Friday) - Scott Hanselman sits down with the actual engineers who build Azure on his journey to learn how to program the cloud. No marketing, no BS, just two engineers and a laptop in short manageable chunks.',
      },
      {
        id: 13,
        name: 'Base.cs',
        link: 'https://www.codenewbie.org/basecs',
        about:
          " Beginner-friendly computer science lessons based on Vaidehi Joshi's base.cs blog series, produced by CodeNewbie.",
      },
      {
        id: 14,
        name: 'Between Screens',
        link: 'https://soundcloud.com/between-screens',
        about:
          'screens) - Expect to find content about the following topics: Ruby, Rails, Sinatra, Sass, Javascript, Design Patterns, Jekyll, Client-Side Web Apps, Rust, Typography, Git, Responsive Design, Prototyping, Web Design, Type Design and more.',
      },
      {
        id: 15,
        name: 'Blockchain Insider',
        link: 'https://bi.11fs.com/',
        about:
          ' Weekly podcast specialising in all things blockchain, ledger technology and crypto currencies.',
      },
      {
        id: 16,
        name: 'Boagworld Show',
        link: 'https://boagworld.com/show',
        about:
          ' Boagworld is a podcast about digital strategy, management and user experience. It offers practical advice, news, tools, review and interviews with leading figures in the web design community.',
      },
      {
        id: 17,
        name: 'BookBytes',
        link: 'https://www.orbit.fm/bookbytes/',
        about: ' A book club podcast for developers.',
      },
      {
        id: 18,
        name: 'Bootstrapped',
        link: 'http://bootstrapped.fm/',
        about:
          ' Both Ian and Andrey are experienced startup founders, both have had major blows and successes in their career. You can learn a lot listening to them.',
      },
      {
        id: 19,
        name: 'Bootstrapped Web',
        link: 'http://bootstrappedweb.com/',
        about:
          " Bootstrapped Web is for entrepreneurs bootstrapping their startups, who believe that the best way to get to where we're going is to learn by doing.",
      },
      {
        id: 20,
        name: 'Breach',
        link: 'https://www.carbonite.com/podcasts/breach/',
        about:
          ' A podcast exploring data breaches and cybersecurity by Carbonite.',
      },
      {
        id: 21,
        name: 'BSDNow',
        link: 'http://www.bsdnow.tv/',
        about: ' A Weekly BSD Podcast - News, Interviews and Tutorials.',
      },
      {
        id: 22,
        name: 'BSDTalk',
        link: 'http://bsdtalk.blogspot.com/',
        about: ' Talking about the BSD family of free operating systems.',
      },
      {
        id: 23,
        name: 'Choose Linux',
        link: 'https://chooselinux.show/',
        about:
          ' The show that captures the excitement of discovering Linux. (Ceased production 2020)',
      },
      {
        id: 24,
        name: 'Citizen Cosmos',
        link: 'https://www.citizencosmos.space/',
        about:
          ' A podcast discovering the masterminds of the Cosmos blockchain ecosystem and web3 . ',
      },
      {
        id: 25,
        name: 'Cloudcast',
        link: 'http://www.thecloudcast.net/',
        about:
          ' Award-winning podcast on all things, Cloud Computing, AWS Ecosystem, OpenSource, DevOps, AppDev, SaaS and SDN.',
      },
      {
        id: 26,
        name: 'CMOS',
        link: 'https://code-maven.com/cmos',
        about:
          'maven.com/cmos) - The Code-Maven Open Source podcast helps you become familiar with a wide range of projects by interviewing users or developers of these projects.',
      },
      {
        id: 27,
        name: 'CodeNewbie Podcast',
        link: 'https://www.codenewbie.org/podcast',
        about: ' Stories from people on their coding journey.',
      },
      {
        id: 28,
        name: 'Coding Over Cocktails',
        link: 'https://www.torocloud.com/podcast',
        about:
          ' A podcast produced by Toro Cloud tackling issues faced by enterprises as they manage the process of digital transformation, application integration, low-code application development, data management, and business process automation.',
      },
      {
        id: 29,
        name: 'CoRecursive Interviews',
        link: 'https://corecursive.com/',
        about:
          ' In-Depth interviews with software development experts.  Focusing on functional programming and languages like scala / haskell / F# / erlang / idris / kotlin.',
      },
      {
        id: 30,
        name: 'CodePen Radio',
        link: 'https://blog.codepen.io/radio/',
        about:
          ' Co-founders of CodePen talk about the ins and outs of running a web software business.',
      },
      {
        id: 31,
        name: 'Command Line Heroes',
        link: 'https://www.redhat.com/en/command-line-heroes',
        about:
          'line-heroes) - A new podcast about the people who transform technology from the command line up.',
      },
      {
        id: 32,
        name: 'Complete Developer Podcast',
        link: 'https://completedeveloperpodcast.com/',
        about:
          ' There are plenty of podcasts out there about languages and coding. What we are doing with the Complete Developer Podcast is to cover the other areas of life. For example, our first episode is about talking with customers, bosses, and others that developers interact with who are not fellow developers.',
      },
      {
        id: 33,
        name: 'Composers Play',
        link: 'https://www.youtube.com/playlist?list=PL05Yj9M-fWdJUySLU5fJ8Lg6h6t43_0nf',
        about:
          'fWdJUySLU5fJ8Lg6h6t43_0nf) - Listen to a video game composer discuss soundtracks of iconic games such as Mass Effect, Duke Nukem II, Doom, and System Shock with their composers, often while playing the game.',
      },
      {
        id: 34,
        name: 'Cortex',
        link: 'https://www.relay.fm/cortex',
        about:
          ' Content creators CGP Grey and Myke Hurley discuss their processes, productivity hacks, workflows, and general working lives.',
      },
      {
        id: 35,
        name: 'CppCast',
        link: 'http://cppcast.com/',
        about: ' The first podcast by C++ developers for C++ developers.',
      },
      {
        id: 36,
        name: 'Creative Coding Podcast',
        link: 'http://creativecodingpodcast.com/',
        about: ' about programming for visual and creative applications.',
      },
      {
        id: 37,
        name: 'CTRL+Click Cast',
        link: 'https://www.ctrlclickcast.com/',
        about:
          ' They inspect the web for you. Interviews with developers and designers, about design, code, and content management systems. Hosted by Lea Alcantara and Emily Lewis.',
      },
      {
        id: 38,
        name: 'Curious Minds',
        link: 'https://www.cmpod.net/',
        about:
          ' Curious Minds is a podcast about Science, Technology, and History. Each episode brings interesting stories from a wide range of subjects: from Physics and Astronomy to Medicine, Art and Science Fiction.',
      },
      {
        id: 39,
        name: 'Darknet Diaries',
        link: 'https://darknetdiaries.com',
        about:
          ' Stories from hackers or those who have been attacked. How they got in and what happened.',
      },
      {
        id: 40,
        name: 'Data Stories',
        link: 'http://datastori.es/',
        about:
          ' Enrico Bertini and Moritz Stefaner discuss the latest developments in data analytics, visualization and related topics.',
      },
      {
        id: 41,
        name: 'Defensive Security Podcast',
        link: 'https://defensivesecurity.org/category/podcast/',
        about:
          ' Defensive Security is a Cyber Security Podcast covering breaches and strategies for defense.',
      },
      {
        id: 42,
        name: 'Design vs Dev',
        link: 'https://agileleague.com/',
        about:
          ' A podcast about web development from the different perspectives of designers and developers.',
      },
      {
        id: 43,
        name: 'DevChat.tv',
        link: 'https://devchat.tv/',
        about:
          " We are programmers. House of Ruby Rogues, Javascript Jabber, IPhreaks, Freelancers' Show, Adventures in Angular and RailsClips.",
      },
      {
        id: 44,
        name: 'Developer On Fire',
        link: 'https://developeronfire.com/',
        about:
          ' Podcast with inspiring interviews with successful software developers, architects, testers, and other professionals with stories of success, failure, excellence, and inspiration.',
      },
      {
        id: 45,
        name: 'DevelopersHangout',
        link: 'http://www.developershangout.io/',
        about:
          ' Two Developers talk about challenges, articles, news, books and other podcasts that came across their radar every 2 weeks. Laravel, PHP are two key topics, and other great podcasts like the ones listed above.',
      },
      {
        id: 46,
        name: 'Developer Tea',
        link: 'https://spec.fm/podcasts/developer-tea',
        about:
          'tea) - Podcast for web and software developers hosted by a developer that you can listen to in less than 10 minutes.',
      },
      {
        id: 47,
        name: 'Developing Perspective',
        link: 'http://developingperspective.com/',
        about:
          " From development and design to marketing and support, Under the Radar is all about independent app development. It's never longer than 30 minutes.",
      },
      {
        id: 48,
        name: 'DevOps Cafe',
        link: 'http://devopscafe.org/',
        about:
          ' In this interview driven show, John Willis and Damon Edwards take a pragmatic look at the technology, tools, and business developments behind the emerging DevOps movement.',
      },
      {
        id: 49,
        name: 'Digital Human',
        link: 'https://www.bbc.co.uk/programmes/b01n7094',
        about:
          ' BBC series explores the digital world presented by Aleks Krotoski.',
      },
      {
        id: 50,
        name: 'Disruptive',
        link: 'https://soundcloud.com/wyssinstitute/sets/disruptive',
        about:
          " Researchers at the Wyss Institute for Biologically Inspired Engineering use Nature's design principles to develop bioinspired materials and devices that will transform medicine and create a more sustainable world. In this podcast series, Terrence McNally speaks directly with Institute researchers, exploring their motivations and how they envision our future as it might be impacted by their disruptive technologies.",
      },
      {
        id: 51,
        name: 'Eat Sleep Code Podcast',
        link: 'https://soundcloud.com/esc-podcast',
        about:
          'podcast - On the show we will be talking to passionate people about a wide range of developer-related topics.',
      },
      {
        id: 52,
        name: 'Elixir Foundation',
        link: 'http://feeds.soundcloud.com/users/soundcloud:users:24638646/sounds.rss',
        about:
          ' Your weekly podcast for news & interviews from around the Elixirlang Community.',
      },
      {
        id: 53,
        name: 'Elixir Outlaws',
        link: 'https://elixiroutlaws.com',
        about: ' Panel discussions of topics in and around Elixir development.',
      },
      {
        id: 54,
        name: 'Embedded.fm',
        link: 'https://www.embedded.fm/',
        about:
          ' Talk about the how, why, and what of engineering, usually devices.',
      },
      {
        id: 55,
        name: 'Ember Weekend',
        link: 'https://emberweekend.com/episodes',
        about: ' A week(end)ly podcast about Ember, hosted by Jon and Chase.',
      },
      {
        id: 56,
        name: 'Entreprogrammers',
        link: 'http://entreprogrammers.com/',
        about:
          ' Get a fly-on-the-wall perspective from 4 developers turned entrepreneurs, as they struggle with the business and learn lessons the hard way. This is the weekly mastermind group of the entreprogrammers.',
      },
      {
        id: 57,
        name: 'FiveJS',
        link: 'https://www.pluralsight.com/codeschool',
        about: ' The latest news in the JavaScript community.',
      },
      {
        id: 58,
        name: 'FLOSS Weekly',
        link: 'https://twit.tv/shows/floss-weekly',
        about:
          'weekly) - Interviews with prominent guests from the free software/open source community.',
      },
      {
        id: 59,
        name: 'Founders Talk',
        link: 'https://changelog.com/founderstalk',
        about:
          "depth, one on one conversations with founders, CEOs, and makers. The journey, lessons learned, and the struggles. Let's do this!",
      },
      {
        id: 60,
        name: 'Fragmented',
        link: 'https://fragmentedpodcast.com/',
        about: ' An Android Developer Podcast.',
      },
      {
        id: 61,
        name: 'Full Stack Radio',
        link: 'http://www.fullstackradio.com/',
        about:
          ' A podcast for developers interested in building great software products.',
      },
      {
        id: 62,
        name: 'Functional Geekery',
        link: 'https://www.functionalgeekery.com/',
        about: ' Functional Geeks, Geeking Functionally.',
      },
      {
        id: 63,
        name: 'Future of Coding',
        link: 'https://futureofcoding.org/',
        about: ' Monthly interviews.',
      },
      {
        id: 64,
        name: 'Get Up and Code',
        link: 'https://simpleprogrammer.com/',
        about:
          ' Get Up and Code is a podcast about fitness for programmers and software developers. Every week, John Sonmez, helps you lose weight, refactor your diet and get in shape.',
      },
      {
        id: 65,
        name: 'GitMinutes',
        link: 'http://www.gitminutes.com/',
        about: ' The show for proficient Git users.',
      },
      {
        id: 66,
        name: 'Google Cloud Platform Podcast',
        link: 'https://www.gcppodcast.com/',
        about:
          ' The Google Cloud Platform Podcast, coming to you every week. Discussing everything from on Google Cloud Platform from App Engine to Big Query.',
      },
      {
        id: 67,
        name: 'Go Time',
        link: 'https://changelog.com/gotime',
        about:
          ' Interesting topics around the Go programming language, building systems, the community, and everything in between.',
      },
      {
        id: 68,
        name: 'Hackaday Podcast',
        link: 'https://hackaday.com/category/podcasts/',
        about:
          " Hackaday's podcast, talking about the best articles published and hackaday contests.",
      },
      {
        id: 69,
        name: 'HardcoreHistory',
        link: 'https://www.dancarlin.com/hardcore-history-series/',
        about:
          'history-series - In Hardcore History the very unconventional Dan Carlin takes his Martian, outside-the-box way of thinking and applies it to the past.',
      },
      {
        id: 70,
        name: 'Greater Than Code',
        link: 'https://www.greaterthancode.com/',
        about: ' because #peoplematter.',
      },
      {
        id: 71,
        name: 'Hacker Public Radio',
        link: 'https://hackerpublicradio.org/',
        about:
          " Hacker Public Radio (HPR) is an Internet Radio show (podcast) that releases shows every weekday Monday through Friday. HPR is driven entirely by the content provided by it's community - on any subject, at any length, in any quality, as long as it's of Interest to hackers (basically anyone with any interest in technology). It is constantly actively looking for content and submissions.",
      },
      {
        id: 72,
        name: 'Harry Potter and the methods of rationality',
        link: 'http://www.hpmorpodcast.com/',
        about:
          ' This is an alternate universe story, where Petunia married a scientist. Harry enters the wizarding world armed with Enlightenment ideals and the experimental spirit.',
      },
      {
        id: 73,
        name: 'HaskellCast',
        link: 'http://www.haskellcast.com/',
        about: '',
      },
      {
        id: 74,
        name: 'Hello Internet',
        link: 'http://www.hellointernet.fm/',
        about:
          ' Science youtubers CGP Grey and Brady Haran discuss everything from flag design to Star Wars.',
      },
      {
        id: 75,
        name: 'Houston We Have a Podcast',
        link: 'https://www.nasa.gov/johnson/HWHAP/',
        about:
          " Official Johnson Space Center NASA's podcast. Hosted weekly, its topics are in general about space and the ISS.",
      },
      {
        id: 76,
        name: 'HTTP 203',
        link: 'https://developers.google.com/web/shows/http203/',
        about:
          '  In each show Jake and Paul pick a hot topic in the world of web development and discuss the various aspects of it, meanwhile dropping in lifehacks, lessons and some rather honest truths.',
      },
      {
        id: 77,
        name: 'Iron Sysadmin',
        link: 'https://www.ironsysadmin.com/',
        about: ' A Podcast by real world sysadmins, for real world sysadmins.',
      },
      {
        id: 78,
        name: 'IRL: Because Online Life Is ERROR! Real Life',
        link: 'https://irlpodcast.org/',
        about:
          ' Host Veronica Belmont shares real stories of life online and real talk about the future of the Web. IRL is an original podcast from Mozilla.',
      },
      {
        id: 79,
        name: 'Javascript Jabber',
        link: 'https://devchat.tv/podcasts/js-jabber/',
        about:
          'jabber/) - Weekly podcast discussion about Javascript on the front and back ends.',
      },
      {
        id: 80,
        name: 'JS Party',
        link: 'https://changelog.com/jsparty',
        about: '',
      },
      {
        id: 81,
        name: 'Ladybug Podcast',
        link: 'https://ladybug.dev/',
        about:
          'hosted tech podcast for all developers with great discussions around how to start coding, the hot technologies right now, how to get your first developer job, imposter syndrome, how to write CSS and more.',
      },
      {
        id: 82,
        name: 'Land of Giants',
        link: 'https://www.vox.com/land-of-the-giants-podcast',
        about:
          "of-the-giants-podcast) - Facebook. Apple. Amazon. Netflix. Google. This podcast examine how it got its power, what it's doing with it, and what might happen to in the future.",
      },
      {
        id: 83,
        name: 'Laravel News Podcast',
        link: 'https://laravel-news.com/podcast/',
        about:
          'news.com/podcast/) - The Laravel News Podcast brings you all the latest news and events related to Laravel.',
      },
      {
        id: 84,
        name: 'Linear Digressions',
        link: 'http://lineardigressions.com/',
        about:
          ' Explores topics of data science and machine learning in an accessible way through real-world stories and examples.',
      },
      {
        id: 85,
        name: 'Linux Action News',
        link: 'https://www.jupiterbroadcasting.com/show/linux-action-news/',
        about:
          'action-news/) - Weekly news about Linux and the open source world.',
      },
      {
        id: 86,
        name: 'Linux For Everyone',
        link: 'https://linuxforeveryone.fireside.fm/',
        about:
          " A show about the thrilling world of desktop Linux, open source software and the community creating it. For beginners and veterans alike! Hosted by Forbes' Jason Evangelho and friends.",
      },
      {
        id: 87,
        name: 'Listen and Learn about AWS',
        link: 'https://aws.amazon.com/podcasts/aws-podcast/',
        about:
          'podcast/) - Jeff Barr discusses various aspects of the Amazon Web Services (AWS) offering. Each podcast include AWS news, tech tips, and interviews with startups, AWS partners, and AWS employees.',
      },
      {
        id: 88,
        name: 'Magic Read Along',
        link: 'http://www.magicreadalong.com',
        about:
          ' A podcast about programming, life and the internet. Topics include FP, OOP, development practices, and a dip into our personal lives from time to time.',
      },
      {
        id: 89,
        name: 'Makers',
        link: 'https://crew.co/',
        about:
          ' Unexpected life moments that have had an impact on today’s most influential and experimental makers.',
      },
      {
        id: 90,
        name: 'Mastering Embedded Systems',
        link: 'https://embeddedsuccess.com/podcast/',
        about:
          " I have identified four major problems in mastering Embedded Systems: 1. Not enough specialists; 2. inadequate design and poor detections of faults; 3. mandatory multi-site approaches are failing; 4. bad mistakes in managing Virtual Teams I'll teach you the know-how and the tools to overcome these challenges.",
      },
      {
        id: 91,
        name: 'Mind the Cloud Podcast',
        link: 'http://mindthecloud.com',
        about:
          ' The podcast about the developers and companies using the cloud to create the future.',
      },
      {
        id: 92,
        name: 'MS Dev Show',
        link: 'https://msdevshow.com/',
        about:
          ' THE podcast for Microsoft developers. Jason Young and Carl Schweitzer talk about the latest in developer news covering topics such as the Azure cloud, Windows, Windows Phone, Visual Studio, and cross-platform development using the Microsoft platform.',
      },
      {
        id: 93,
        name: 'New Rustacean',
        link: 'https://newrustacean.com/',
        about:
          ' This is a podcast about learning the programming language Rust—from scratch.',
      },
      {
        id: 94,
        name: 'Note To Self',
        link: 'https://www.wnycstudios.org/shows/notetoself',
        about:
          ' Host Manoush Zomorodi talks with everyone from big name techies to elementary school teachers about the effects of technology on our lives, in a quest for the smart choices that will help you think and live better.',
      },
      {
        id: 95,
        name: 'Office 365 Developer Podcast',
        link: 'NA',
        about:
          'us/microsoft-365/blog/) - The only show focused on Office 365 development where we talk to the experts from all over the globe coding on the Office 365 platform.',
      },
      {
        id: 96,
        name: 'Open Source Security Podcast',
        link: 'https://www.opensourcesecuritypodcast.com/',
        about:
          ' A security podcast geared towards those looking to better understand security topics of the day.',
      },
      {
        id: 97,
        name: 'Open Source System Podcast',
        link: 'http://opensourcesystempodcast.vf.io/',
        about: ' Latest open source projects and news!',
      },
      {
        id: 98,
        name: 'Our Ludicrous Future',
        link: 'https://ourludicrousfuture.com/',
        about: ' Mostly talks abut space, technology and Elon Musk.',
      },
      {
        id: 99,
        name: 'Packet Pushers',
        link: 'https://packetpushers.net/',
        about:
          ' About data networking by network architects. Deeply technical & unabashedly nerdy.',
      },
      {
        id: 100,
        name: 'Partially Derivative',
        link: 'http://partiallyderivative.com/',
        about: ' A podcast about Data, Nerdiness, and Beer.',
      },
      {
        id: 101,
        name: 'PHP Round Table',
        link: 'https://www.phproundtable.com/',
        about:
          ' The PHP Roundtable is a casual gathering of developers discussing topics that PHP nerds care about.',
      },
      {
        id: 102,
        name: 'PHP Town Hall',
        link: 'http://phptownhall.com/',
        about:
          ' Town Hall a way for PHP developers to raise questions about current events (or upcoming things) in the PHP community, with different guests each week.',
      },
      {
        id: 103,
        name: 'Podcast.\\__init__',
        link: 'https://www.pythonpodcast.com/',
        about: ' A podcast about Python and the people who make it great.',
      },
      {
        id: 104,
        name: 'Practical AI',
        link: 'https://changelog.com/practicalai',
        about: '',
      },
      {
        id: 105,
        name: 'Privacy Security & OSINT with Michael Bazzel',
        link: 'https://inteltechniques.com/podcast.html',
        about:
          ' This weekly podcast presents ideas to help you become digitally invisible, stay secure from cyber threats, and make you a better online investigator.',
      },
      {
        id: 106,
        name: 'Python Bytes',
        link: 'https://pythonbytes.fm/',
        about: ' Python headlines delivered directly to your earbuds.',
      },
      {
        id: 107,
        name: 'Radiolab',
        link: 'https://www.wnycstudios.org/shows/radiolab',
        about:
          ' Radiolab is a show about curiosity. Where sound illuminates ideas, and the boundaries blur between science, philosophy, and human experience.',
      },
      {
        id: 108,
        name: 'React Podcast',
        link: 'https://reactpodcast.com/',
        about: ' Podcast about React.js',
      },
      {
        id: 109,
        name: 'Reasonably Sound',
        link: 'http://reasonablysound.com/',
        about:
          ' Context, explanation and a little celebration of the complexities and awesomeness of audio, and the various cultures which surround and have grown around it.',
      },
      {
        id: 110,
        name: 'Reply All',
        link: 'https://www.gimletmedia.com/reply-all',
        about: 'all) - Reply All is a show about the internet.',
      },
      {
        id: 111,
        name: 'Risky Business',
        link: 'https://risky.biz/netcasts/risky-business/',
        about:
          'business/) - Risky Business was established in February, 2007. It take a lighthearted look at information security news and features.',
      },
      {
        id: 112,
        name: 'Rocket Ranch',
        link: 'https://www.nasa.gov/kennedy/rocketranch/',
        about: ' Official podcast from NASA’s Kennedy Space Center.',
      },
      {
        id: 113,
        name: 'Rocket Talk',
        link: 'https://www.tor.com/features/series/rocket-talk-podcast/',
        about:
          'talk-podcast/) - Rocket Talk is Tor.com’s sci-fi/fantasy podcast, blending discussion style talk-radio with audio narrations of Tor.com’s award winning short fiction.',
      },
      {
        id: 114,
        name: 'Ruby5',
        link: 'https://www.pluralsight.com/search?q=ruby',
        about: ' The latest news in the Ruby and Rails community.',
      },
      {
        id: 115,
        name: 'RunAs Radio',
        link: 'http://www.runasradio.com/',
        about:
          ' A weekly Internet Audio Talk Show for IT Professionals working with Microsoft products.',
      },
      {
        id: 116,
        name: 'Second Career Devs',
        link: 'https://secondcareerdevs.com/',
        about:
          ' Each episode of the Second Career Devs podcast focuses on a guest who became a software engineer after a previous career.',
      },
      {
        id: 117,
        name: 'Security Now!',
        link: 'https://www.grc.com/securitynow.htm',
        about:
          ' Security Now! consists of a discussion between Steve Gibson and Leo Laporte of issues of computer security and, conversely, insecurity.',
      },
      {
        id: 118,
        name: 'Security Weekly',
        link: 'https://securityweekly.com',
        about: ' A weekly podcast about security and info sec.',
      },
      {
        id: 119,
        name: 'Semaphore Uncut',
        link: 'https://semaphoreci.com/podcast',
        about:
          " Software industry pros discuss problems they’re currently solving with the products they're working on.",
      },
      {
        id: 120,
        name: 'Self Hosted',
        link: 'https://selfhosted.show/',
        about:
          ' Discover new software and hardware to get the best out of your network, control smart devices, and secure your data on cloud services. Self-Hosted is a chat show between Chris and Alex two long-time self-hosters who share their lessons and take you on the journey of their new ones. A Linux Academy podcast showcasing free and open source technologies you can host yourself.',
      },
      {
        id: 121,
        name: 'ShopTalk Show',
        link: 'https://shoptalkshow.com/',
        about: ' Podcast about front end web design, development and UX.',
      },
      {
        id: 122,
        name: 'Software Engineering Daily',
        link: 'https://softwareengineeringdaily.com/',
        about:
          ' A podcast with daily interviews about technical software topics intended for professional software developers.',
      },
      {
        id: 123,
        name: 'Software Engineering Radio',
        link: 'http://www.se-radio.net/',
        about:
          'radio.net/) - The podcast for professional software developers.',
      },
      {
        id: 124,
        name: 'Software Engineering Unlocked',
        link: 'https://www.software-engineering-unlocked.com/',
        about:
          'engineering-unlocked.com/) - Interviews about how to build reliable, maintainable and scaleable software people love.',
      },
      {
        id: 125,
        name: 'Software Sessions',
        link: 'https://www.softwaresessions.com/',
        about: ' Practical conversations about building software.',
      },
      {
        id: 126,
        name: 'Soft Skills Engineering',
        link: 'https://softskills.audio/',
        about:
          ' Weekly advice podcast for software developers. It takes more than great code to be a great developer.',
      },
      {
        id: 127,
        name: 'Sound Of Symfony',
        link: 'https://www.soundofsymfony.com/',
        about: ' The unofficial Symfony podcast.',
      },
      {
        id: 128,
        name: 'StarTalk Radio',
        link: 'https://www.startalkradio.net/?sfid=22493&post_types=show',
        about:
          ' Program devoted to all things space and is hosted by renowned astrophysicist Neil deGrasse Tyson.',
      },
      {
        id: 129,
        name: 'Surveillance Report',
        link: 'https://techlore.tech',
        about:
          ' A weekly security and privacy news roundup to keep you up-to-speed on important updated in our digital world. Uploaded every weekend!.',
      },
      {
        id: 130,
        name: 'Sword & Laser',
        link: 'http://swordandlaser.com/',
        about:
          ' The Sword and Laser (S&L) is a science fiction and fantasy-themed book club, video show and podcast, started by Veronica Belmont and Tom Merritt.',
      },
      {
        id: 131,
        name: 'SYFY25 Origin Stories',
        link: 'https://www.syfy.com/syfywire/syfy25/podcast-episodes',
        about:
          'episodes) - Adam Savage sits down with creators, thought-leaders, and celebrity fans to discuss the moments, people, and milestones that have changed the genre universe forever; a nostalgic celebration of all things science fiction.',
      },
      {
        id: 132,
        name: 'Syntax FM',
        link: 'https://syntax.fm/',
        about: ' A Tasty Treats Podcast for Web Developers.',
      },
      {
        id: 133,
        name: 'Sysadministrivia',
        link: 'https://sysadministrivia.com/',
        about: ' Linux, Lagers, and Late Nights.',
      },
      {
        id: 134,
        name: 'Syscast Podcast',
        link: 'http://podcast.sysca.st/',
        about:
          ' Talking Linux, open source, web development and system administration (DevOps).',
      },
      {
        id: 135,
        name: 'Talking Kotlin',
        link: 'http://talkingkotlin.com/',
        about: ' A bimonthly podcast on Kotlin and more hosted by Hadi Hariri.',
      },
      {
        id: 136,
        name: 'Talking Machines',
        link: 'http://www.thetalkingmachines.com/',
        about:
          ' Talking Machines is your window into the world of machine learning.',
      },
      {
        id: 137,
        name: 'Talk Python to Me',
        link: 'https://talkpython.fm/',
        about:
          ' Weekly podcast (30 minutes) that covers a wide array of Python topics.',
      },
      {
        id: 138,
        name: 'Teaching Python',
        link: 'https://www.teachingpython.fm/',
        about: ' Two middle school teachers learning and teaching Python.',
      },
      {
        id: 139,
        name: 'TechStuff',
        link: 'https://www.stuffmedia.com/techstuff-podcast.htm',
        about:
          'podcast.htm) - TechStuff tackles topics ranging from basic electronics to the Large Hadron Collider and everything in between. TechStuff is dedicated to demystifying technology and its role in our society and culture.',
      },
      {
        id: 140,
        name: 'Test and Code Podcast',
        link: 'https://testandcode.com/',
        about:
          ' A podcast about Software Development, Software Testing, and Python.',
      },
      {
        id: 141,
        name: 'Testing In The Pub',
        link: 'https://testingpodcast.com/category/testing-in-the-pub/',
        about:
          'in-the-pub/) - British podcast about Software Testing practices',
      },
      {
        id: 142,
        name: 'That Podcast',
        link: 'https://thatpodcast.io/',
        about:
          ' Beau and Dave talking about life as dads, programmers, and entrepreneurs.',
      },
      {
        id: 143,
        name: 'The Agile Coffee Podcast',
        link: 'http://agilecoffee.com/',
        about:
          ' AgileCoffee brings together an engaged group of practitioners passionate about Agile methodologies and Lean practices.',
      },
      {
        id: 144,
        name: 'The Amp Hour',
        link: 'https://theamphour.com/',
        about:
          ' Discussing the world of electronics design in an hour long(ish) weekly show.',
      },
      {
        id: 145,
        name: 'The Big Web Show',
        link: 'http://5by5.tv/bigwebshow',
        about: " It's everything web that matters.",
      },
      {
        id: 146,
        name: 'The Bug Bounty Podcast',
        link: 'https://anchor.fm/bugbountypodcast',
        about:
          ' A Podcast about bugs, bounties and its researchers. Hosted by Fisher.',
      },
      {
        id: 147,
        name: 'The Changelog',
        link: 'https://changelog.com/podcast',
        about:
          ' Conversations with the hackers, leaders, and innovators of software development.',
      },
      {
        id: 148,
        name: 'The Cognicast',
        link: 'http://blog.cognitect.com/cognicast',
        about:
          ' The Cognicast previously ThinkRelevance: The Podcast is the podcast from the Cognitect family.',
      },
      {
        id: 149,
        name: 'The CyberWire Daily',
        link: 'https://thecyberwire.com/podcasts/daily-podcast',
        about:
          'podcast) - The daily cybersecurity news and analysis industry leaders depend on. Published each weekday, the program also included interviews with a wide spectrum of experts from industry, academia, and research organizations all over the world.',
      },
      {
        id: 150,
        name: 'The Cybrary Podcast',
        link: 'https://www.cybrary.it/info/cybrary-podcast/',
        about:
          'podcast/) -  It discusses about industry leaders and professionals from all aspects on the cybersecurity and IT fields give insight into how they got where they are today and what new and emerging technology we should be taking notice of.',
      },
      {
        id: 151,
        name: 'The Five-Minute Geek Show',
        link: 'http://www.fiveminutegeekshow.com',
        about:
          'Minute Geek Show](http://www.fiveminutegeekshow.com) - Matt Stauffer, unabashedly geeky, 5 minutes, twice a week. Frontend dev, backend dev, audio, design, podcasts--all fair game.',
      },
      {
        id: 152,
        name: 'The Food Fight Show',
        link: 'http://foodfightshow.org/',
        about: ' The Podcast where DevOps chefs do battle',
      },
      {
        id: 153,
        name: 'The Hackersploit Podcast',
        link: 'https://www.listennotes.com/podcasts/the-hackersploit-podcast-alexis-rwTafnO1K9c/',
        about:
          'hackersploit-podcast-alexis-rwTafnO1K9c/) - The HackerSploit podcast is aimed at educating anyone interested in Infosec, Hacking or Cybersecurity. ',
      },
      {
        id: 154,
        name: 'The Hanselminutes podcast',
        link: 'https://hanselminutes.com/',
        about: ' Fresh Air for Developers.',
      },
      {
        id: 155,
        name: 'The Laravel Podcast',
        link: 'http://www.laravelpodcast.com',
        about:
          ' The Laravel Podcast brings you Laravel and PHP development news and discussion.',
      },
      {
        id: 156,
        name: 'The Life Scientific',
        link: 'https://www.bbc.co.uk/programmes/b015sqc7',
        about:
          ' Professor Jim Al-Khalili talks to leading scientists about their life and work, finding out what inspires and motivates them and asking what their discoveries might do for mankind.',
      },
      {
        id: 157,
        name: 'The Loosely Coupled Podcast',
        link: 'http://looselycoupled.info/',
        about:
          ' Jeff Carouth and Matt Frost combine their decades of experience as web developers to talk about developer life.',
      },
      {
        id: 158,
        name: 'The Manifest',
        link: 'https://manifest.fm',
        about: ' A podcast all about package management.',
      },
      {
        id: 159,
        name: 'The Ship Show',
        link: 'http://theshipshow.com/',
        about:
          ' Build engineering, DevOps, release management & everything in between!',
      },
      {
        id: 160,
        name: 'The Stack Overflow Podcast',
        link: 'https://stackoverflow.blog/podcasts/',
        about:
          ' A weekly podcast about developers and the Stack Overflow community.',
      },
      {
        id: 161,
        name: 'The Web Ahead',
        link: 'http://5by5.tv/webahead',
        about:
          ' Conversations with world experts on changing technologies and future of the web. The Web Ahead is your shortcut to keeping up.',
      },
      {
        id: 162,
        name: 'The Web Platform Podcast',
        link: 'http://thewebplatform.libsyn.com/',
        about:
          ' A weekly show that dives deep into all things web from the developers building the platform today.',
      },
      {
        id: 163,
        name: "This Developer's Life",
        link: 'http://thisdeveloperslife.com/',
        about: ' A podcast about developers and their lives.',
      },
      {
        id: 164,
        name: 'Thoughtbot',
        link: 'https://thoughtbot.com/podcasts',
        about:
          ' We record and release weekly podcasts from thoughtbot on design, Ruby on Rails, iOS, running software companies, and maintaining work/life balance.',
      },
      {
        id: 165,
        name: 'ThoughtWorks',
        link: 'https://soundcloud.com/thoughtworks',
        about:
          ' A community of passionate individuals whose purpose is to revolutionize software design, creation and delivery, while advocating for positive social change.',
      },
      {
        id: 166,
        name: 'Three Devs and a Maybe',
        link: 'https://threedevsandamaybe.com/',
        about:
          ' Weekly discussion podcast on all things web development. Topics range from daily developer life, PHP, frameworks, testing, good software design and our experiences using many other programming languages.',
      },
      {
        id: 167,
        name: 'Toolsday Podcast',
        link: 'https://spec.fm/podcasts/toolsday',
        about:
          ' A 20-ish-minute podcast about the latest in tech tools, tips, and tricks on Tuesdays at 2!',
      },
      {
        id: 168,
        name: 'Ubuntu Podcast',
        link: 'http://ubuntupodcast.org',
        about:
          ' A lively and upbeat podcast made by members of the Ubuntu UK LoCo that includes news, discussion and interviews from the Ubuntu and Open Source communities. (Ceased production 2021)',
      },
      {
        id: 169,
        name: 'Web of Tomorrow',
        link: 'https://www.orbit.fm/weboftomorrow/',
        about: ' Podcast about JavaScript and front-end web development.',
      },
      {
        id: 170,
        name: 'Weird Trick Mafia',
        link: 'https://weirdtrickmafia.fm/',
        about:
          ' A podcast about tech, feelings, open source, and /dev/urandom.',
      },
      {
        id: 171,
        name: 'Watch Out for Fireballs!',
        link: 'https://www.watchoutforfireballs.com/',
        about: ' A game club podcast, focused on retro and non-current games.',
      },
      {
        id: 172,
        name: 'Why Are Computers',
        link: 'https://whyarecomputers.com/',
        about: ' A podcast about computers and computer programs and why.',
      },
      {
        id: 173,
        name: "WIRED's Webmonkey Podcast",
        link: 'https://www.wired.com/series/webmonkey/',
        about: ' Glance behind the scenes of WIRED.com with the tech team.',
      },
      {
        id: 174,
        name: 'Women in Analytics After Hours',
        link: 'https://www.womeninanalytics.com/podcast',
        about:
          ' Connects with women in all areas of data and analytics to talk about what they do in the space, how they got there, and more.',
      },
    ];
    const response = await index.addDocuments(documents);
    return response;
  }

  // async deleteDocument(documentId: string) {
  //   const index = await this._client.getIndex('podcast');
  //   const response = await index.deleteDocument(documentId);
  //   return response;
  // }

  // async deleteAllDocumentOfMovies() {
  //   const index = await this._client.getIndex('movies');
  //   const response = await index.deleteAllDocuments();
  //   return response;
  // }
}
