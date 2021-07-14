function searchToggle(obj, evt){
    let container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
















const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

/* Retrieving Elements */
let preloader = document.querySelector('.preloader');
let video = document.querySelector('.video-container');
let playPause = document.querySelector('.btn-play-pause');
let shuffle = document.querySelector('.btn-shuffle');
let quote = document.getElementById('quoteDisplay');
let randVideo = document.getElementById('random-video');
let hideButton = document.querySelector('.btn-hide-items');
let appTitle = document.querySelector('.app-title');
let signature = document.querySelector('.signature');
   

/* Hide Preloader once page loads */
window.addEventListener('load', function() {
    preloader.classList.add("hide-preloader");
    displayVideo(); 
    displayQuote();
})

/* Display Random Quote */
function displayQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    quote.innerHTML = quotes[randomNumber];
}

/* Display Random Video */
function displayVideo() {
    randVideo.src = "./videos/" + Math.floor(Math.random() * 133) + ".mp4";
}

/* Play/Pause Button EventListener */
playPause.addEventListener('click', function() {
    if (playPause.innerHTML === 'Pause Video') {
        video.pause();
        playPause.innerHTML = 'Play Video';
    } else {
        video.play();
        playPause.innerHTML = 'Pause Video';
    }
});

/* Shuffle Button EventListener */
shuffle.addEventListener('click', function() {
    displayVideo();
    displayQuote();
    if (playPause.innerHTML === 'Play Video') {
        playPause.innerHTML = 'Pause Video';
    }
});

/* Hide Items Button EventListener */
hideButton.addEventListener('click', function() {
    if (hideButton.innerHTML === "Hide Items") {
        shuffle.classList.remove('fade-in-text');
        playPause.classList.remove('fade-in-text');
        appTitle.classList.remove('fade-in-text');
        signature.classList.remove('fade-in-text');
        shuffle.style.display = "none";
        playPause.style.display = "none";
        appTitle.style.display = "none";
        signature.style.display = "none";
        hideButton.innerHTML = "Show Items"
        hideButton.classList.add("btn-hide-items-hidden");
    } else {
        hideButton.classList.remove("btn-hide-items-hidden");
        shuffle.classList.add('fade-in-text');
        playPause.classList.add('fade-in-text');
        appTitle.classList.add('fade-in-text');
        signature.classList.add('fade-in-text');
        shuffle.style.display = "block";
        playPause.style.display = "block";
        appTitle.style.display = "block";
        signature.style.display = "block";
        hideButton.innerHTML = "Hide Items"
    }
});

/* Quotes Gathered From Internet */
const quotes = [
    "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    "When we have respect for ourselves and others, we gravitate towards connections that encourage that.",
    "Anger is the ultimate destroyer of your own peace of mind.",
    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",
    "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    "No matter what you achieve, what you want to aspire to be, or how famous and powerful you become, the most important thing is whether you are excited about each and every moment of your life because of your work and people around you.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    "We do not remember days, we remember moments.",
    "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    "We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.",
    "Life is a mirror and will reflect back to the thinker what he thinks into it.",
    "You're only here for a short visit. Don't hurry, don't worry. And be sure to smell the flowers along the way.",
    "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    "Nothing in life is to be feared, it is only to be understood. Nows the time to understand more, so that we may fear less.",
    "Life is a song - sing it. Life is a game play it. Life is a challenge meet it. Life is a dream - realize t. Life is a sacrifice offer it. Life is love - enjoy it.",
    "The purpose of life is of a life of purpose.",
    "A life is not important except in the impact it has on other lives.",
    "I have found that if you love life, life will love you back.",
    "If you live long enough, you'll make mistakes. But f you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main S thing is never quit, never quit, never quit.",
    "Every man dies. Not every man really lives.",
    "Good, better, best. Never let rest. Til your good is better and your better is best.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "If you can dream it, you can do it.",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
    "I can, therefore I am.",
    "You just can't beat the person who never gives up.",
    "Expect problems and eat them for breakfast.",
    "You are not here merely to make: living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
    "If you don't know where you are going, any road will get you there.",
    "The only true wisdom is in knowing you know nothing.",
    "In every walk with nature one receives far more than he seeks.",
    "Knowledge is of no value unless you put it into practice.",
    "We cannot become what we need to be by remaining what we are.",
    "With pride, there are many curses. With humility, there come many blessings.",
    "It's not what you look at that matters, it's what you see.",
    "Experience is not what happens to you; it's what you do with what happens to you.",
    "My advice to you is not to inquire why or whither, but just enjoy your ice cream while it's on your plate.",
    "We can never obtain peace in the outer world until we make peace with ourselves.",
    "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    "Stay hungry, stay foolish.",
    "I want to put a ding in the universe.",
    "And no, we don't know where it will lead. We just know there's something much bigger than any of us here.",
    "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on.",
    "Happiness is when what you think, what you say, and what you do are in harmony.",
    "Some cause happiness wherever they go; others whenever they go.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "We know what we are, but know not what we may be.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "Keep your face always toward the sunshine - and shadows will fall behind you.",
    "It is never too late to be what you might have been.",
    "Opportunity doesn't knock, build a door.",
    "Your present circumstances don't determine where you can go; they merely determine where you start.",
    "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    "Don’t Let Yesterday Take Up Too Much Of Today.",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
    "We Generate Fears While We Sit. We Overcome Them By Action.",
    "Whether You Think You Can Or Think You Can’t, You’re Right.",
    "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.",
    "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
    "Creativity Is Intelligence Having Fun.",
    "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
    "Do What You Can With All You Have, Wherever You Are.",
    "To See What Is Right And Not Do It Is A Lack Of Courage.",
    "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!",
    "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.",
    "Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
    "The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.",
    "You Don’t Have To Be Great To Start, But You Have To Start To Be Great.",
    "A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.",
    "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.",
    "No matter what people tell you, words and ideas can change the world.",
    "I am not afraid of tomorrow, for I have seen yesterday and I love today!",
    "You can never plan the future by the past.",
    "Take into account that great love and great achievements involve great risk.",
    "Lost time is never found again.",
    "He that respects himself is safe from others.",
    "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.",
    "Don’t take life too seriously. You’ll never get out of it alive.",
    "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
    "Nothing that you have not given away will ever be really yours.",
    "Singleness of purpose is one of the chief essentials for success in life, no matter what may be one’s aim.",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "There are many ways of going forward, but only one way of standing still.",
    "When a thing is done, it’s done. Don’t look back. Look forward to your next objective.",
    "Use what talents you possess; the woods would be very silent if no birds sang there except those that sang best.",
    "In the end, it’s not the years in your life that count. It’s the life in your years.",
    "Life is a mountain. Your goal is to find your path, not to reach the top.",
    "If you spend too much time thinking about a thing, you’ll never get it done.",
    "Keep your eyes on the stars and your feet on the ground.",
    "Change your thoughts and you change your world.",
    "Life can only be understood backwards; but it must be lived forwards."
];