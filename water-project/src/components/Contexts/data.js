import { createContext, useContext } from "react";
const data =[
    {
        id: '1',
        title: "agra",
        info: "Agra is a city located on the banks of the Yamuna River in the Indian state of Uttar Pradesh. It is situated about 230 kilometers (140 miles) southeast of the national capital Delhi and 330 kilometers (205 miles) west of the state capital Lucknow. With a population of approximately 1.6 million, Agra is one of the most populous cities in Uttar Pradesh and the 19th most populous in India.Agra has a rich history dating back to the 11th century, when it was first mentioned in the epic Mahābhārata. The city was later founded by Raja Badal Singh, a Sikarwar Rajput king, in the 15th century. Agra was an important center of Mughal power, with the Mughal emperor Akbar building the Agra Fort (also known as the Red Fort) in the 16th century.",
        image: "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 4510
    },
    {
        id: '2',
        title:"jaipur",
        info: "Jaipur, also known as the Pink City, is the capital and largest city of the Indian state of Rajasthan. Founded in 1727 by Maharaja Sawai Jai Singh II, it is a popular tourist destination and a commercial trade center with major road, rail, and air connections.Jaipur was built to replace nearby Amber (now Amer) as the capital of the princely state of Jaipur, founded by the Rajputs in the 12th century CE. The city’s architecture is predominantly rose-colored, earning it the nickname “Pink City.” The chief buildings include the City Palace,",
        image:"https://images.unsplash.com/photo-1724579242963-ea62ff1f0d72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:9874 
    },
    {
     id: '3',
     title: "kolkata",
     info: "Kolkata,[a] also known as Calcutta[b] (its official name until 2001), is the capital and largest city of the Indian state of West Bengal. It lies on the eastern bank of the Hooghly River, 80 km (50 mi) west of the border with Bangladesh. It is the primary financial and commercial centre of eastern and northeastern India.[16] Kolkata is the seventh most populous city in India with an estimated city proper population of 4.5 million (0.45 crore) while its metropolitan region Kolkata Metropolitan Area is third most populous metropolitan region of India with metro population of over 15 million (1.5 crore).[17] Kolkata is regarded by many sources as the cultural capital of India and a historically and culturally significant city in the historic region of Bengal.[1][18][19] It is the second largest Bengali-speaking city in the world. It has the highest number of Nobel laureates among all cities in India.after his general Mir Jafar mutinied in support of the company, and was later made the Nawab for a brief time.[21] Under company and later crown rule, Calcutta served as the de facto capital of India until 1911. Calcutta was the second largest city in the British Empire, after London,[22] and was the centre of bureaucracy, politics, law, education, science and the arts in India",
     image: "https://images.unsplash.com/photo-1724868120655-7f176ac37f3c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     price:2580   
    },
    {
        id:'4',
        title:"kerla",
        info:"After the Klingon moon Praxis exploded, Kerla responded to the offer of assistance from the USS Excelsior, informing them that while there had been an incident on Praxis things were under control and no assistance was required at the time. Over the next couple months as the consequences of the moon's destruction to the biosphere of Qo'noS became apparent, Gorkon reached out to the Federation for assistance.During that time Kerla became involved with a cabal of Klingon, Federation, and Romulan individuals who were determined to stop the Federation and the Empire from making peace with each other. After the conspiracy assassinated Gorkon and made it seem like it was at least a hit sanctioned by Captain Kirk of the USS Enterprise, Kerla was an outspoken proponent of going to war with the Federation",
        image: "https://images.unsplash.com/photo-1725000555869-6dc896256729?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 6840
    },
    {
        id:5,
        title: "mathura",
        info: "Mathura is a city in the North Indian state of Uttar Pradesh. It is located approximately 50 kilometres (31 mi) north of Agra, and 145 kilometres (90 mi) south-east of Delhi; about 11 kilometres (6.8 mi) from the town of Vrindavan, and 22 kilometres (14 mi) from Govardhan. It is the administrative centre of Mathura District of Uttar Pradesh. During the ancient period, Mathura was an economic hub, located at the junction of important caravan routes. The 2011 census of India estimated the population of Mathura to be 25,47,000According to Hindu scriptures Mathura is the birthplace of Lord Krishna at the centre of Braj or Brij-bhoomi, called Shri Krishna Janma-Bhoomi, literally: ‘Lord Krishna’s birthplace’. The Keshav Dev Temple was built in ancient times on the site of Krishna’s legendary birthplace (an underground prison). According to the Mahabharata and Bhagavata Purana epics, Mathura was the capital of the Surasena Kingdom, ruled by Kansa the maternal uncle of Shri Krishna",
        image: "https://images.unsplash.com/photo-1724931282671-2d3bcd6de8f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3210
    }

]

export const dataContext = createContext(data);
export const dataContextProvider = dataContext.Provider

export default function useData(){
    return useContext(dataContext);
}