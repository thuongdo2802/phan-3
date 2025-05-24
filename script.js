// Dữ liệu cho tất cả các bài đọc và câu hỏi từ file III.docx
const passagesData = [
    {
        id: 'passage-colors',
        passageText: `
            <p>Different colours can affect us in many different ways; that’s according to Verity Allen. In her new series ‘Colour me Healthy’, Verity looks at the ways that colours can influence how hard we work and the choices we make. They can even change our emotions and even influence how healthy we are.</p>
            <p>‘Have you ever noticed how people always use the same colours for the same things?’ says Verity. ‘Our toothpaste is always white or blue or maybe red. It’s never green. Why not? For some reason we think that blue and white is clean, while we think of green products as being a bit disgusting. It’s the same for businesses. We respect a company which writes its name in blue or black, but we don’t respect one that uses pink or orange. People who design new products can use these ideas to influence what we buy.’</p>
            <p>During this four-part series, Verity studies eight different colours, two colours in each programme. She meets people who work in all aspects of the colour industry, from people who design food packets, to people who name the colours of lipsticks. Some of the people she meets clearly have very little scientific knowledge to support their ideas, such as the American ‘Colour Doctor’ who believes that serious diseases can be cured by the use of coloured lights. However, she also interviews real scientists who are studying the effects of green and red lights on mice, with some surprising results.</p>
            <p>Overall, it’s an interesting show, and anyone who watches it will probably find out something new. But because Verity goes out of her way to be polite to everyone she meets on the series, it’s up to the viewers to make their own decisions about how much they should believe.</p>
        `,
        questions: [
            { qNum: 1, text: "What is the writer doing in this text?", options: { A: "giving information about how colors influence us.", B: "reporting what happens in a new television series.", C: "giving information about a television presenter.", D: "giving his opinion of a recent television show." }, correct: "B" },
            { qNum: 2, text: "Which of the following shows the probable content of the four shows?", options: { A: "Part I: Health, Part 2: Products and Industry; Part 3: Emotions; Part 4: Decisions.", B: "Part 1: Blue and Black, Part 2: Red and Orange; Part 3: White and Grey; Part 4: Green and Yellow.", C: "Part 1: Meeting Designers; Part 2: Meeting People who name colors; Part 3: Meeting doctors, Part 4: Meeting Scientists.", D: "Part 1: Cleaning Products; Part 2: Make-up, Part 3: Clothes; Part 4: Food." }, correct: "B" },
            { qNum: 3, text: "According to Verity, why is a knowledge of color important?", options: { A: "It can help you to choose the best products.", B: "It can give you new ideas.", C: "It can help you to change people’s minds.", D: "It can help you to sell products." }, correct: "D" },
            { qNum: 4, text: "Who does the writer respect least?", options: { A: "Verity Allen.", B: "The people who name lipsticks.", C: "The “Color Doctors”.", D: "The scientists who work with mice." }, correct: "C" },
            { qNum: 5, text: "Which of the following would make a good title for the text?", options: { A: "Enjoy it, but don’t believe everything.", B: "Another great show from Verity Allen! Five Stars!", C: "Don’t miss this if you work in Business!", D: "What this programme! IT will make you healthy!" }, correct: "A" },
        ]
    },
    {
        id: 'passage-horton',
        passageText: `
            <p>At first glance, there is little in Horton to attract people. The other nearby towns have much more to offer: Bradfield has its river and historic buildings, while Newtown has shops and entertainment. The buildings of Horton look dirty and unloved. For shops, there is a small supermarket, a few bargain shops, a bakery which, strangely, does not sell bread and a florist which has one stand of sad-looking flowers.</p>
            <p>Even so, Horton has several advantages over its neighbouring towns. Firstly, it has a country park. Four thousand years ago, this was an important fort. There are no historic remains here now, but there are wonderful views over the countryside. On sunny weekends you can often see kids out with their parents, kicking balls or flying kites.</p>
            <p>There aren’t many job opportunities in Horton, and the roads to nearby cities aren’t really fast, but there are excellent rail links. You can be in London in an hour and a half, and other cities are less than an hour away. That means that parents can earn a good salary and still get home in time to spend the evenings with their families.</p>
            <p>Houses in Horton aren’t pretty, but they’re functional and cheap. The streets are quiet and safe, and there are plenty of parks and playgrounds. It has a library, three primary schools and a secondary school, St. Mark’s. It’s not as academically brilliant as other schools in the area, but it is friendly and offers a wide range of subjects and activities to children of all abilities and backgrounds. The town also has a swimming and a sports centre, and the community halls hold regular clubs and events for people of all ages.</p>
        `,
        questions: [
            { qNum: 1, text: "What is the writer’s main purpose?", options: { A: "To explain what tourists can do in Horton.", B: "To explain why Horton is a good place to live.", C: "To explain why Horton is not as pleasant as other towns.", D: "To describe the history of Horton." }, correct: "B" },
            { qNum: 2, text: "What part of Horton does the writer find disappointing?", options: { A: "the shops", B: "the country park", C: "transport links", D: "the schools" }, correct: "A" },
            { qNum: 3, text: "What types of people is Horton most suitable for?", options: { A: "wealthy professionals.", B: "low income families", C: "elderly people.", D: "sport and history students." }, correct: "B" }, // Implied by cheap houses, quiet/safe, family-friendly schools.
            { qNum: 4, text: "What advantages does Horton bring to workers?", options: { A: "There are plenty of jobs available in the town.", B: "You can drive to nearby cities in a short time.", C: "You can get to several cities quickly by train.", D: "Working conditions are better here than in other towns." }, correct: "C" },
            { qNum: 5, text: "Which of the following is the best description of Horton?", options: { A: "A quiet, country town which has a number of good leisure facilities.", B: "A friendly, historic town which is a great place to live, work and take a holiday.", C: "A busy, industrial town which has good links to neighbouring cities.", D: "A dirty, unpopular town which has little to offer visitors or residents." }, correct: "A" },
        ]
    },
    {
        id: 'passage-feel-special',
        passageText: `
            <p>Everybody likes to feel special. Sadly, many of us grow up believing that we're not special at all. We wish that we could be more attractive or better at sports. We wish we had more money or more beautiful clothes. Like the Tin Man, the Scarecrow, or the Cowardly Lion from The Wizard of Oz, we think we're not good enough just as we are.</p>
            <p>In the film, The Tin Man wishes he had a heart. The Scarecrow wishes that he had a brain, and the Lion wants courage. Eventually, each of them realizes that he already has what he wants.</p>
            <p>Nearly all parents want us to be the best we can be. They occasionally attempt to encourage us to do better by comparing us to others. They mean well, but the message we usually get is that we're not good enough. We start to believe that the only way we can be special is by being better than somebody else, but we are frequently disappointed. There will always be somebody out there that is better than we are at something. There are a lot of people around who may not be as intelligent as we are but who are better at sports. Or they may not be as handsome, but they have more money. It is unthinkable for us to be better than everybody else all the time.</p>
            <p>Like the Tin Man, the Scarecrow, and the Cowardly Lion, we all need what we believe will make us better people. What we don't understand is that often we already have inside us the very things that we look for in life. Our parents often forget to tell us that we are special, that we are good enough just as we are. Perhaps no one told them when they were growing up, or maybe they just forgot. Either way, it's up to us to remind them sometimes that each of us, in our own way, is special. What we are is enough!</p>
        `,
        questions: [
            { qNum: 1, text: "What is the writer’s main aim in writing the text?", options: { A: "To talk about your family problems.", B: "To explain the importance of being yourself.", C: "To describe how intelligent we are.", D: "To suggest how people can change their way of life." }, correct: "B" },
            { qNum: 2, text: "This essay was most likely written by", options: { A: "a young person", B: "a coach", C: "a teacher", D: "a parent" }, correct: "D" }, // The tone and content strongly suggest a parent's perspective.
            { qNum: 3, text: "What does the writer say about our parents?", options: { A: "They always tell us that we are good enough.", B: "They never forget to tell us that we are special.", C: "They always tell us that we are special.", D: "They frequently forget to tell us that we are special." }, correct: "D" },
            { qNum: 4, text: "The author in this essay believes that", options: { A: "We are all good enough just the way we are.", B: "The richer you are, the better you are.", C: "Intelligent people are more special than others.", D: "Not everyone can be special." }, correct: "A" },
            { qNum: 5, text: "Which of the following would be the best title for this passage?", options: { A: "What Makes You Laugh?", B: "What Makes You Happy?", C: "What Makes You Special?", D: "What Makes You Stronger?" }, correct: "C" },
        ]
    },
    {
        id: 'passage-night-shift',
        passageText: `
            <p>Many people have jobs that are not very interesting, but a lot of people have to work at night, and this is very difficult. When everybody else is getting ready to go out, they have to go to work, and this puts a lot of psychological stress on them. It is also not very healthy because the human body is designed to be active in the day and to rest in the dark. If this cycle is reversed it can have a bad effect on a person's health.</p>
            <p>So, why do people do the night shift? Nowadays many businesses have to offer a 24-hour service, like hotels, delivery companies, some supermarkets are open all night and all day, call centres and hospitals. It is true that some people only need a few hours of sleep at night but the majority need eight hours. Humans are most active in the middle of the day, and the time when they are least able to concentrate and be efficient is between 2 am and 4 am. This is the worst time to drive or to do anything that needs concentration.</p>
            <p>The body finds it very difficult to adapt to the opposite cycle. Things are not likely to get better in the future because more and more businesses are working 24-hour cycles to keep in step with our 24-hour society.</p>
        `,
        questions: [
            { qNum: 1, text: "What is the writer’s main aim in writing the text?", options: { A: "to describe the importance of work.", B: "to help people change the way of life.", C: "to say how working at night can be harmful.", D: "to suggest how to become a night shift worker." }, correct: "C" },
            { qNum: 2, text: "What does the writer say about night jobs?", options: { A: "You get better working conditions.", B: "There is a variety of them.", C: "It is easier than working during the day.", D: "Many people refuse to work at night." }, correct: "B" }, // "Nowadays many businesses have to offer a 24-hour service, like hotels, delivery companies, some supermarkets are open all night and all day, call centres and hospitals." - variety.
            { qNum: 3, text: "What would a reader learn about sleep from the text?", options: { A: "Everybody needs the same amount.", B: "It’s difficult to change your sleeping needs.", C: "People sleep better in the early morning.", D: "It’s easy to change your sleeping habits." }, correct: "B" }, // "The body finds it very difficult to adapt to the opposite cycle."
            { qNum: 4, text: "What does the writer say about the future?", options: { A: "Fewer people will work during the day.", B: "Many people will stop working during the day.", C: "Some jobs will always be done at night.", D: "Nobody will work at night." }, correct: "C" }, // "Things are not likely to get better in the future because more and more businesses are working 24-hour cycles..." implies continued night work.
            { qNum: 5, text: "Which of the following could also be a title for this text?", options: { A: "Society is changing but our bodies are not!", B: "A good night’s sleep can change your life!", C: "A worker that sleeps more, works more!", D: "It’s time to end the night shift!" }, correct: "A" }, // Focuses on the conflict between 24-hour society and human biology.
        ]
    },
    {
        id: 'passage-snakebites',
        passageText: `
            <p>You're hiking with a friend and then as you step over a tree log a snake beneath bites your leg. One thought races through your mind, 'If you get bitten by a snake, suck out the venom.’' Terrified, you turn to your friend, but he replies, 'No way! Then we'll both die.' Is he right?</p>
            <p>Most likely, your friend wouldn't die. But if he has an open wound in his mouth, the venom could enter his bloodstream, which is no help to either of you. So, venom sucking isn't a solution.</p>
            <p>To understand how to treat snakebites, you need to know the difference between poisons and venoms. Poisons are toxic, in other words dangerous, if you swallow or smell them. Venoms, on the other hand, are only toxic if they get into soft tissues and the bloodstream. So, if you suck the venom out of a snake bite, you won't be affected. But that doesn't mean you should do it! Experts now strongly advise against it. Why?</p>
            <p>Venom enters the bloodstream extremely quickly, and trying to suck it out is ineffective because it’s faster than your reaction. The best way to prevent the venom from quickly moving through the bloodstream is to remain calm, and avoid doing anything that would increase the heart rate. So what else should we do? Well, be aware of what snakes are in the place you are walking in. That way you will have an idea which ones are dangerous.</p>
        `,
        questions: [
            { qNum: 1, text: "What is the writer trying to do in this text?", options: { A: "explain the dangers of snakes.", B: "advise against walking in the countryside.", C: "warn about certain venomous snakes.", D: "offer information about snake bites." }, correct: "D" },
            { qNum: 2, text: "The writer advises against sucking the venom because", options: { A: "it tastes awful.", B: "it is risky.", C: "it will hurt more.", D: "it will kill you." }, correct: "B" }, // "But if he has an open wound in his mouth, the venom could enter his bloodstream, which is no help to either of you." - risky.
            { qNum: 3, text: "According to the writer, poison", options: { A: "is usually breathed in.", B: "has to be injected.", C: "is not the same as venom.", D: "is less dangerous than venom." }, correct: "C" }, // "To understand how to treat snakebites, you need to know the difference between poisons and venoms."
            { qNum: 4, text: "If bitten by a snake, you should", options: { A: "run to the nearest place for help.", B: "not move at all.", C: "try to keep cool.", D: "sit and decide if it was a dangerous snake." }, correct: "C" }, // "The best way to prevent the venom from quickly moving through the bloodstream is to remain calm, and avoid doing anything that would increase the heart rate." - keeping calm implies keeping cool.
            { qNum: 5, text: "Which would be the best advice leaflet for snake bites?", options: { A: "ATTENTION WALKERS Based on worldwide data, millions die of snakebites yearly! Take your snake bite kit with you. Be safe!", B: "SAFE NOT SORRY If you like walking or are travelling abroad, GET INFORMATION on snake species. Be careful and be find out emergency contact information.", C: "WORRIED ABOUT SNAKES? Read here about how to treat your own snakebites! Very few people die from bites if they follow this treatment. Follow it step by step.", D: "ALL YOU NEED TO KNOW ABOUT SNAKES Snake venom travels slowly so keep calm. Only if you think it is a dangerous snake, move as fast as you can to get help. Read more about snakes here!" }, correct: "B" }, // Focuses on prevention and preparation, aligning with the text's advice.
        ]
    },
    {
        id: 'passage-honey-badgers',
        passageText: `
            <p>What’s fiercer than a lion but smaller than a beagle? The honey badger, one of the toughest mammals in Africa and western Asia. Honey badgers stand less than a foot high. They are only a couple feet long. They weigh just over 20 pounds. Yet they have a reputation for toughness that is far greater than their size. Some honey badgers will chase away lions and take their kills. I guess that goes to show you that size isn’t the only thing that matters in a fight.</p>
            <p>So what makes the honey badger so tough? They have speed, stamina, and agility, but so do many mammals. They aren’t stronger than lions, so how do they stop them? The thing that set the honey badger apart is their skin. Their skin is thick and tough. Arrows, spears, and bites from other animals can rarely pierce it. Small bullets can’t even penetrate it. Not only is their skin thick and tough, it is also loose. This allows them to twist and turn to attack while another animal is gripping them. The only safe grip one can get on a honey badger is on the back of their necks.</p>
            <p>Honey badgers have long, sharp claws. These claws are good for attacking and even better for digging. Honey badgers are some of nature’s most skilled diggers. They can dig a nine-foot tunnel into hard ground in about 10 minutes. They love to catch a meal by digging up the burrows of frogs, rodents, and cobras. They also use their digging skills to create their homes. They live in small chambers in the ground and defend them fiercely. They will attack horses, cows, and even water buffalo if they are foolish enough to poke around a honey badger’s den.</p>
        `,
        questions: [
            { qNum: 1, text: "Which best express the main idea of the third paragraph?", options: { A: "Honey badgers have sharp claws that they use for fighting.", B: "Honey badgers digging skills assist them in many ways.", C: "Honey badgers use their claws to defend their homes.", D: "Honey badgers will defend their homes to the death against any animal." }, correct: "B" }, // The paragraph extensively discusses their digging skills for hunting and creating homes.
            { qNum: 2, text: "Which statement would the author most likely agree with?", options: { A: "What makes the honey badger so tough is their speed and strength.", B: "Honey badgers are large in size and tireless in fighting spirit.", C: "What makes honey badgers so tough is their thick, loose skin.", D: "Honey badgers got their name from the sweet taste of their meat." }, correct: "C" },
            { qNum: 3, text: "Which animal is the honey badger afraid to attack?", options: { A: "Lion", B: "Water buffalo", C: "Poisonous snake", D: "None of these" }, correct: "D" },
            { qNum: 4, text: "Which best defines the meaning of the word burrows as it is used in the third paragraph?", options: { A: "Lily pads or other seaweeds in which animals hide.", B: "Holes or tunnels in which animals live.", C: "A nest or animal dwelling in a tree or brush.", D: "A water supply where small animals come to drink." }, correct: "B" },
            { qNum: 5, text: "Which is not one of the honey badger’s strengths?", options: { A: "Thick skin.", B: "Powerful jaws and strong teeth.", C: "Poisonous claws", D: "Tireless fighting spirit." }, correct: "C" }, // Text doesn't mention poisonous claws or strong teeth. But it talks about "sharp claws" and "tireless fighting spirit". The closest incorrect is "Poisonous claws" as it is explicitly not mentioned or implied.
        ]
    },
    {
        id: 'passage-underwater-research',
        passageText: `
            <p>Last month I got the chance to take part in an underwater research project in an area of the Gulf of Mexico called the Flower Gardens. A team of professional researchers, led by the scientist Dr. Matt Phillips, was trying to learn more about the fist and various creatures that live in this part of the sea. The Flower Gardens are a long way from the shore and we spent three days on a boat. The team used a piece of underwater equipment called a Remotely Operated Vehicle (ROV) to collect information. The ROV could measure water depth and temperature and it also had a camera that sent live film back to the boat. The ROV was great fun. It was controlled by a computer on the boat, and I was allowed to operate it a few minutes.</p>
            <p>However, the thing I enjoyed most was driving into the water. At first, I was quite frightened – mainly because I couldn’t see land in any direction. But as soon as I jumped into the water, I wasn’t afraid anymore. It was amazing to see the colourful fist swimming around and I could see all the way to the Flower Gardens, which are almost 30 metres down.</p>
            <p>I will never forget the Flower Gardens. The trip was like a holiday but I also learnt new things about science and research projects. The team was very friendly and everyone was happy to explain what they knew about the sea. It was a great opportunity and it has made me think about my goals in life. The experience will definitely help me work harder to become a scientist.</p>
        `,
        questions: [
            { qNum: 1, text: "What is Miguel Diaz doing in the text?", options: { A: "describing the part he played in a science project.", B: "explaining how to apply for a place on a science trip.", C: "giving advice on understanding difficult areas of science.", D: "persuading others to organize their own science projects." }, correct: "A" },
            { qNum: 2, text: "What does Miguel say about the ROV?", options: { A: "It was difficult to operate.", B: "It could only go so far under water.", C: "It was an expensive piece of equipment.", D: "It recorded what was happening under water." }, correct: "D" }, // "it also had a camera that sent live film back to the boat."
            { qNum: 3, text: "What was Miguel’s attitude towards diving?", options: { A: "His main worry was losing sight of the boat.", B: "He enjoyed it less than other parts of the trip.", C: "His feelings changed once he was in the water.", D: "He was quite disappointed by the variety of fish." }, correct: "C" },
            { qNum: 4, text: "What effect has the trip had on Miguel?", options: { A: "It has changed his opinion of science.", B: "It has improved the way he works in a team.", C: "It has made him a lot more interested in the sea.", D: "It has encouraged him to work towards his goals." }, correct: "D" },
            { qNum: 5, text: "What might Miguel write in his diary about the trip?", options: { A: "It was very interesting working with Dr. Phillips and his team but I wish someone else my age had been on the trip.", B: "Going to the Flower Gardens was great fun. I now know much more about science but I realise there’s still a lot more to learn.", C: "The trip was like a holiday and I saw some amazing fish. The only thing I disliked was collecting information about the sea.", D: "The Flower Gardens is a beautiful place but scientists are worried that pollution levels there will increase." }, correct: "B" }, // Matches his feelings of learning and future goals.
        ]
    },
    {
        id: 'passage-floods',
        passageText: `
            <p>Floods are second only to fire as the most common of all natural disasters. They occur almost everywhere in the world, resulting in widespread damage and even death. Consequently, scientists have long tried to perfect their ability to predict floods. So far, the best that scientists can do is to recognize the potential for flooding in certain conditions. There are a number of conditions, from deep snow on the ground to human error, that cause flooding.</p>
            <p>When deep snow melts it creates a large amount of water. Although deep snow alone rarely causes floods, when it occurs together with heavy rain and sudden warmer weather it can lead to serious flooding. If there is a fast snow melt on top of frozen or very wet ground, flooding is more likely to occur than when the ground is not frozen. Frozen ground or ground that is very wet and already saturated with water cannot absorb the additional water created by the melting snow. Melting snow also contributes to high water levels in rivers and streams. Whenever rivers are already at their full capacity of water, heavy rains will result in the rivers overflowing and flooding the surrounding land.</p>
            <p>Rivers that are covered in ice can also lead to flooding. When ice begins to melt, the surface of the ice cracks and breaks into large pieces. These pieces of ice move and float down the river. They can form a dam in the river, causing the water behind the dam to rise and flood the land upstream. If the dam breaks suddenly, then the large amount of water held behind the dam can flood the areas downstream too.</p>
            <p>Broken ice dams are not the only dam problems that can cause flooding. When a large human-made dam breaks or fails to hold the water collected behind it, the results can be devastating. Dams contain such huge amounts of water behind them that when sudden breaks occur, the destructive force of the water is like a great tidal wave. Unleashed dam waters can travel tens of kilometres, cover the ground in metres of mud and debris, and drown and crush everything and creature in their path. Hopefully, this knowledge of why floods happen can help us reduce the damage they cause.</p>
        `,
        questions: [
            { qNum: 1, text: "Which of the following are included as causes for floods in the reading passage?", options: { A: "droughts", B: "large lakes", C: "poorly built roads", D: "melting snow" }, correct: "D" },
            { qNum: 2, text: "How does deep snow cause flooding?", options: { A: "Melting snow causes flooding.", B: "Too much rain causes flooding.", C: "Sudden warm temperatures combined with heavy rain causes flooding.", D: "Freezing water causes flooding." }, correct: "C" },
            { qNum: 3, text: "A broken human-made dam is compared to what?", options: { A: "a tsunami", B: "a tidal wave", C: "a broken ice dam", D: "overflowing" }, correct: "B" },
            { qNum: 4, text: "Which of the following best describes how a frozen river can cause a flood?", options: { A: "The ice in the river melts too quickly and causes a flood.", B: "The ice in the river cracks causing the water to overflow.", C: "The ice in the river cracks into pieces that eventually create a dam causing the water to overflow.", D: "The water behind the ice dam collects and when the dam breaks, it causes flooding upstream." }, correct: "C" },
            { qNum: 5, text: "Why does saturated ground contribute to flooding problems?", options: { A: "The ground cannot absorb more moisture.", B: "The ground is too hard, so the water runs off.", C: "The ground forms a kind of dam.", D: "It remains frozen." }, correct: "A" },
        ]
    },
    {
        id: 'passage-stress',
        passageText: `
            <p>There is a famous expression in English: "Stop the world, I want to get off!" This expression refers to a feeling of panic, or stress, that makes a person want to stop whatever they are doing, try to relax, and become calm again. 'Stress' means pressure or tension. It is one of the most common causes of health problems in modern life. Too much stress results in physical, emotional, and mental health problems.</p>
            <p>There are numerous physical effects of stress. Stress can affect the heart. It can increase the pulse rate, make the heart miss beats, and can cause high blood pressure. Stress can affect the respiratory system. It can lead to asthma. It can cause a person to breathe too fast, resulting in a loss of important carbon dioxide. Stress can affect the stomach. It can cause stomach aches and problems digesting food. These are only a few examples of the wide range of illnesses and symptoms resulting from stress.</p>
            <p>Emotions are also easily affected by stress. People suffering from stress often feel anxious. They may have panic attacks. They may feel tired all the time. When people are under stress, they often overreact to little problems. For example, a normally gentle parent under a lot of stress at work may yell at a child for dropping a glass of juice. Stress can make people angry, moody, or nervous.</p>
            <p>Long-term stress can lead to a variety of serious mental illnesses. Depression, an extreme feeling of sadness and hopelessness, can be the result of continued and increasing stress. Alcoholism and other addictions often develop as a result of overuse of alcohol or drugs to try to relieve stress. Eating disorders, such as anorexia, are sometimes caused by stress and are often made worse by stress. If stress is allowed to continue, then one's mental health is put at risk.</p>
            <p>It is obvious that stress is a serious problem. It attacks the body. It affects the emotions. Untreated, it may eventually result in mental illness. Stress has a great influence on the health and well-being of our bodies, our feelings, and our minds. So, reduce stress: stop the world and rest for a while.</p>
        `,
        questions: [
            { qNum: 1, text: "Which of the following is not a common problem caused by stress?", options: { A: "Physical problems", B: "Anecdotal problems", C: "Mental problems", D: "Emotional problems" }, correct: "B" },
            { qNum: 2, text: "According to the passage, which of the following parts of the body does not have physical problems caused by stress?", options: { A: "The arms", B: "The stomach", C: "The lungs", D: "The heart" }, correct: "A" }, // Arms not mentioned for physical effects; stomach, respiratory (lungs), heart are.
            { qNum: 3, text: "Choose the best answer to explain how alcoholism is caused by stress.", options: { A: "Alcohol is used to relieve stress.", B: "Alcohol is popular.", C: "Alcohol is a chemical.", D: "Alcohol is similar to medicine." }, correct: "A" },
            { qNum: 4, text: "Which of the following is not caused by long-term stress?", options: { A: "bloating", B: "addiction", C: "anorexia", D: "alcoholism" }, correct: "A" }, // Bloating not mentioned as a long-term effect.
            { qNum: 5, text: "Symptoms of emotional stress include …", options: { A: "feeling joyous.", B: "feeling hungry.", C: "feeling thirsty.", D: "feeling tired" }, correct: "D" }, // "They may feel tired all the time."
        ]
    },
    {
        id: 'passage-yellowstone',
        passageText: `
            <p>Yellowstone National Park, located in Idaho, Montana, and Wyoming, was established as the first national park in the United States. The park is a popular destination for visitors who enjoy ecological tourism as it offers forests, mountains, and abundant ecosystems to explore. Some of Yellowstone’s most well-known landmarks are its geothermal hot springs and geysers, the most famous of which is named Old Faithful. Last fall, Lisa and her friends decided to take a camping trip to Yellowstone National Park. They arranged to stay at one of the park’s many convenient campsites. For their camping trip, they brought their backpacks, sleeping bags, and a cooler of food and drinks. They pitched their tents immediately upon arriving to their campsite.</p>
            <p>During their trip, Lisa and her friends hiked the many trails of the park, exploring its natural surroundings. In the forest, they saw a lot of local wildlife. Lisa was surprised to see a family of grizzly bears, some gray wolves, and even bald eagles flying overhead. Outside of the woods, they admired the beauty of some of Yellowstone’s natural cascades. Since Yellowstone contains many hot springs and the world’s largest area of active geysers, Lisa and her friends visited many different geyser sites. They even spent an afternoon swimming in Yellowstone’s Boiling River. Of all of the sites, Lisa and her friends agreed that Old Faithful was the most impressive. Lisa and her friends waited patiently for the geyser to erupt. After about 40 minutes, a stream of boiling water over 100 feet tall sprayed from the ground and up into the air. Fortunately, no one got wet!</p>
        `,
        questions: [
            { qNum: 1, text: "Yellowstone is an important national park in the US because:", options: { A: "It is the country’s first national park.", B: "It is the most visited US national park.", C: "It is the most ecologically diverse natural park.", D: "It is the largest US national park." }, correct: "A" },
            { qNum: 2, text: "When did Lisa and her friends visit Yellowstone National Park?", options: { A: "Last winter.", B: "Last autumn.", C: "Last summer.", D: "Last spring." }, correct: "B" }, // "Last fall" (fall is autumn)
            { qNum: 3, text: "Where did Lisa and her friends stay during their visit to the park?", options: { A: "At a hotel.", B: "At a campground.", C: "In a log cabin.", D: "In a rental home." }, correct: "B" }, // "stay at one of the park’s many convenient campsites"
            { qNum: 4, text: "All of the following are animals that Lisa saw during her trip except:", options: { A: "Gray wolves", B: "Bald eagles", C: "Wild horses", D: "Grizzly bears" }, correct: "C" },
            { qNum: 5, text: "Why did Lisa and her friends wait patiently when visiting Old Faithful?", options: { A: "There was a long line to see the geyser.", B: "They geyser took about 40 minutes to erupt.", C: "They were still wet from swimming in the Boiling River.", D: "They arrived an hour before the geyser opened to the public." }, correct: "B" },
        ]
    }
];

let currentPassageIndex = 0; // Bắt đầu từ bài đầu tiên

// Hàm này sẽ tạo HTML cho một bài đọc và các câu hỏi của nó
function renderPassage(passageData) {
    const quizContentDiv = document.getElementById('quiz-content');
    quizContentDiv.innerHTML = `
        <div class="passage">
            ${passageData.passageText}
        </div>
        <form class="quiz-form" id="quizForm-${passageData.id}">
            </form>
    `;

    const form = document.getElementById(`quizForm-${passageData.id}`);
    passageData.questions.forEach(q => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        // Ensure unique ID for questions across passages if multiple passages are rendered simultaneously
        // Here, we re-render, so qID is fine.
        questionBlock.id = `q${q.qNum}`;
        questionBlock.innerHTML = ``; // Clear existing HTML before adding content

        // Add question text
        const questionText = document.createElement('p');
        questionText.className = 'question-number';
        questionText.textContent = `${q.qNum}. ${q.text}`;
        questionBlock.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        for (const [key, value] of Object.entries(q.options)) {
            const label = document.createElement('label');
            // Pass correct answer to onchange function for immediate feedback
            label.innerHTML = `<input type="radio" name="q${q.qNum}" value="${key}" onchange="checkSingleAnswer(this, '${q.correct}')"> <span>${key}. ${value}</span><span class="feedback-icon"></span>`;
            optionsDiv.appendChild(label);
        }
        questionBlock.appendChild(optionsDiv);
        form.appendChild(questionBlock);
    });

    // Add the "Xem kết quả cuối cùng" button to the current form
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'submit-btn';
    submitButton.textContent = 'Xem kết quả cuối cùng của bài hiện tại';
    submitButton.onclick = () => checkAllAnswers(passageData); // Pass current passage data
    form.appendChild(submitButton);
}

// Hàm chuyển bài đọc
function changePassage(direction) {
    const prevPassageIndex = currentPassageIndex;
    currentPassageIndex += direction;

    if (currentPassageIndex < 0) {
        currentPassageIndex = 0;
    }
    if (currentPassageIndex >= passagesData.length) {
        currentPassageIndex = passagesData.length - 1;
    }

    // Only render if the passage index has actually changed
    if (prevPassageIndex !== currentPassageIndex) {
        renderPassage(passagesData[currentPassageIndex]);
    }
    updateNavigationButtons();
    document.getElementById('passage-indicator').textContent = `Bài ${currentPassageIndex + 1} / ${passagesData.length}`;
    document.getElementById('quizResult').style.display = 'none'; // Hide result when changing passage
}

// Cập nhật trạng thái nút điều hướng
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentPassageIndex === 0;
    document.getElementById('nextBtn').disabled = currentPassageIndex === passagesData.length - 1;
}

// Hàm kiểm tra một đáp án duy nhất (khi người dùng chọn)
// Lấy correctAnswer từ tham số để đảm bảo đúng bài
function checkSingleAnswer(radioElement) {
    const qName = radioElement.name; // e.g., 'q1'
    const questionBlockDiv = radioElement.closest('.question-block');
    const labels = questionBlockDiv.querySelectorAll('label');

    // Get the correct answer for this specific question from the current passagesData
    const currentPassageData = passagesData[currentPassageIndex];
    const questionNumber = parseInt(qName.replace('q', ''));
    const currentQuestionData = currentPassageData.questions.find(q => q.qNum === questionNumber);
    const correctAnswer = currentQuestionData ? currentQuestionData.correct : null;

    if (!correctAnswer) {
        console.error("Correct answer not found for question: " + qName);
        return;
    }

    // --- Step 1: Clear all previous highlights and feedback icons for this question ---
    labels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
        const feedbackIcon = label.querySelector('.feedback-icon');
        if (feedbackIcon) {
            feedbackIcon.textContent = '';
        }
    });

    // --- Step 2: Apply highlight and feedback icon to the *selected* answer ---
    const selectedValue = radioElement.value;
    const parentLabel = radioElement.closest('label');
    const selectedFeedbackIcon = parentLabel.querySelector('.feedback-icon');

    if (selectedValue === correctAnswer) {
        parentLabel.classList.add('correct');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✓';
        }
    } else {
        parentLabel.classList.add('incorrect');
        if (selectedFeedbackIcon) {
            selectedFeedbackIcon.textContent = '✗';
        }
        // --- Step 3: If selected is incorrect, also highlight the correct answer in green ---
        labels.forEach(label => {
            if (label.querySelector('input').value === correctAnswer) {
                label.classList.add('correct');
                const correctFeedbackIcon = label.querySelector('.feedback-icon');
                if (correctFeedbackIcon) {
                    correctFeedbackIcon.textContent = '✓';
                }
            }
        });
    }
}

// Hàm kiểm tra tất cả đáp án của bài hiện tại (khi nhấn nút "Xem kết quả cuối cùng")
function checkAllAnswers(passageData) {
    let score = 0;
    const totalQuestions = passageData.questions.length;
    const quizResultDiv = document.getElementById('quizResult');

    passageData.questions.forEach(q => {
        const qName = `q${q.qNum}`;
        const questionBlockDiv = document.getElementById(qName);
        if (!questionBlockDiv) return;

        const form = document.getElementById(`quizForm-${passageData.id}`);
        const selectedInput = form.elements[qName] ? (form.elements[qName].value ? form.elements[qName] : Array.from(form.elements[qName]).find(input => input.checked)) : null;
        const selectedValue = selectedInput ? selectedInput.value : null;

        const labels = questionBlockDiv.querySelectorAll('label');

        // Clear any existing highlights and feedback icons before final evaluation
        labels.forEach(label => {
            label.classList.remove('correct', 'incorrect');
            const feedbackIcon = label.querySelector('.feedback-icon');
            if (feedbackIcon) {
                feedbackIcon.textContent = '';
            }
        });

        if (selectedValue) {
            labels.forEach(label => {
                const feedbackIcon = label.querySelector('.feedback-icon');
                if (label.querySelector('input').value === selectedValue) {
                    if (selectedValue === q.correct) {
                        label.classList.add('correct');
                        if (feedbackIcon) feedbackIcon.textContent = '✓';
                        score++;
                    } else {
                        label.classList.add('incorrect');
                        if (feedbackIcon) feedbackIcon.textContent = '✗';
                        // Highlight the actual correct answer
                        labels.forEach(correctLabel => {
                            if (correctLabel.querySelector('input').value === q.correct) {
                                correctLabel.classList.add('correct');
                                const correctFeedbackIcon = correctLabel.querySelector('.feedback-icon');
                                if (correctFeedbackIcon) correctFeedbackIcon.textContent = '✓';
                            }
                        });
                    }
                }
            });
        } else { // If no option was selected for this question
            // Just highlight the correct answer
            labels.forEach(label => {
                if (label.querySelector('input').value === q.correct) {
                    label.classList.add('correct');
                    const feedbackIcon = label.querySelector('.feedback-icon');
                    if (feedbackIcon) feedbackIcon.textContent = '✓';
                }
            });
        }
    });

    quizResultDiv.style.display = 'block';
    quizResultDiv.innerHTML = `Bạn đã trả lời đúng ${score} / ${totalQuestions} câu.`;
}


// Chạy khi trang web được tải: render bài quiz đầu tiên
document.addEventListener('DOMContentLoaded', () => {
    if (passagesData.length > 0) {
        renderPassage(passagesData[currentPassageIndex]);
        updateNavigationButtons();
    }
});