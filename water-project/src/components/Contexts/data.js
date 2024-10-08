import { createContext, useContext } from "react";
const data =[
    {
        id: '1',
        title: "Rainwater Harvesting Guide",
        info: `Do you remember learning about rainwater harvesting in school? We all had a chapter on this topic. But how many of us actually remember it? How many of us actually practice it? Well, this blog is all you might want to know about rainwater harvesting.Rainwater harvesting is the practice of collecting and storing rainwater for later use. It is an ancient technique that has gained popularity in recent years due to its environmental and economic benefits.Rainwater harvesting can be implemented on both small and large scales, ranging from individual households to entire communities.
        What is the process of Rainwater Harvesting? The process of rainwater harvesting typically involves the following steps: Collection: Rainwater is collected from rooftops, catchment areas, or other surfaces where rain falls. The collection surface is designed to direct the water toward a storage system, such as a tank or a reservoir.Filtration: Before storing the rainwater, it is important to filter out any debris, leaves, or other contaminants. This can be achieved through various filtration methods, such as mesh screens, gravel filters, or sedimentation tanks. Storage: Once the rainwater is filtered, it is stored in tanks, barrels, cisterns, or underground reservoirs. The storage capacity depends on the intended use and the amount of rainfall in the area.   Purification (optional): If the harvested rainwater is intended for potable use, additional purification steps may be required. This can involve treating the water with disinfectants or using more advanced filtration systems.   Distribution and use: The stored rainwater can be used for a variety of purposes, including irrigation, flushing toilets, washing clothes, or even drinking water, depending on the level of treatment and purification. Proper plumbing systems or pumps may be needed to distribute the harvested rainwater to different areas.`,
        image: "https://nelda.org.in/wp-content/uploads/2023/05/Deshpee-Blog-Zeus.jpg",
        date: "May 24, 2023",
        by: "a"
    },
    {
        id: '2',
        title:"Drip Irrigation",
        info: "Drip irrigation is an efficient and economical way to water your yard and garden. Used commonly in drier areas of the country, drip irrigation is becoming more popular in the Northeast.  Unlike other forms of irrigation, such as sprinklers that are only 65-75% efficient, drip irrigation 90% efficient at allowing plants to use the water applied.  And, it reduces runoff and evaporation. Drip irrigation applies the water slowly at the plant root zone where it is needed most.Drip irrigation has more commonly been used in commercial nursery and farm operations, however, homeowners are beginning to take advantage of its uses and benefits. As a homeowner, you can use drip irrigation in your vegetable and perennial gardens, and to water trees and shrubs.         Benefits of Drip Irrigation: Drip irrigation involves placing tubing with emitters on the ground along side the plants. The emitters slowly drip water into the soil at the root zone. Because moisture levels are kept at an optimal range, plant productivity and quality improve. In addition, drip irrigation - 1.Prevents disease by minimizing water contact with the leaves, stems, and fruit of plants. 2.Allows the rows between plants to remain dry, improving access and reducing weed growth.   3.Saves time, money, and water because the system is so efficient.     4.Decreases labor.  5.Increases effectiveness on uneven ground.     6.Reduces leaching of water and nutrients below the root zone.          Drip Irrigation System Design and Components : The main components of a drip irrigation system (see graphic below) include the mainline, valve, sub-main, backflow preventer, pressure regulator, filter, tubing adapters and fittings, drip tubing, emitters, and end caps.",
        image:"https://imgs.search.brave.com/LYgYEADg1q-CUX9NSm7x3jhkS5fml3QyXHGtEBtpJGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kcmlwLWlycmln/YXRpb24tcHJlY2lz/aW9uLXdhdGVyaW5n/XzEyNDc5NjUtMzc4/NjUuanBnP3NpemU9/NjI2JmV4dD1qcGc",
        date:"May 24, 2024",
        by: "Soaker Hose"
    },
    {
     id: '3',
     title: "Water Scarcity Is a Global Issue",
     info: "The United Nations Educational, Scientific and Cultural Organization (UNESCO) estimates that 2 billion people do not have access to safe drinking water and 3.6 billion lack access to safely-managed sanitation. Parts of the Middle East and Northern Africa are already experiencing severe water stress, with populations far exceeding the availability of resources. Many experts predict that half the global population could face water shortages by 2025 if we fail to curb our consumption and waste. Some countries will be hit harder by this problem than others. Parts of India and Asia are already facing extreme water scarcity, with some groundwater supplies depleted entirely, and many African countries also struggle with a lack of clean water infrastructure and availability. As the climate crisis worsens, countries in these areas will face even more hardship than they're currently struggling with. Water shortages can result in the spread of diseases, poor sanitation, a rise in food shortages and have a devastating impact on agriculture, to name just a few. Water inequality also exacerbates global poverty as populations without access to clean water struggle to improve their living standards without this essential resource.",
     image: "https://www.unicef.org/sites/default/files/styles/hero_extended/public/UN0199521.jpg.webp?itok=XUuDwFl_",
     price:2580   
    },
    {
        id:'4',
        title:"What is Rainwater Harvesting",
        info:"Rainwater harvesting is collecting the run-off from a structure or other impervious surface in order to store it for later use. Traditionally, this involves harvesting the rain from a roof. The rain will collect in gutters that channel the water into downspouts and then into some sort of storage vessel. Rainwater collection systems can be as simple as collecting rain in a rain barrel or as elaborate as harvesting rainwater into large cisterns to supply your entire household demand. The idea of rainwater harvesting usually conjures up images of an old farm cistern or thoughts of developing countries. The reality is that rainwater harvesting is becoming a viable alternative for supplying our households and businesses with water. It’s not just for the farm anymore! There are many countries such as Germany and Australia where rainwater harvesting is a norm. Due to the green building movement, you will be seeing rainwater harvesting systems become more popular here in America. The collection of rainwater is known by many names throughout the world. It ranges from rainwater collection to rainwater harvesting to rainwater catchment. In addition, terms such as roofwater collection or rooftop water collection is also used in other countries. We believe that rainwater harvesting is a viable technology in an urban setting. All that is necessary to take advantage of this resource is to capture the free water falling on your roof and direct it to a rainwater storage tank. By doing this, you can take control of your water supply and replace all or at least a substantial portion of your water needs. Rainwater harvesting systems can be configured to supply your whole house and/or your landscape needs",
        image: "https://plus.unsplash.com/premium_photo-1661835487357-93efb621099b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 6840
    },
    {
        id:5,
        title: "Why Is Water Conservation Important?",
        info: "Water is a resource. The current water supply on Earth comes from surface water runoff, groundwater, and snow. This supply comes from the same sources that have been used for thousands of years, which is threatened by overdevelopment, pollution, and global warming. Only three percent of the Earth’s water supply is made up of freshwater, with only half a percent of that available for human consumption. Saltwater from the ocean cannot be consumed unless it is desalinated, which is a costly process involving a great deal of energy consumption.Conservation alleviates droughts. Dry areas like deserts experience drought regularly, in which the rainfall and snowfall aren’t adequate and cause a water shortage. Conserving water can help alleviate the effects of water shortages in any given community.Water use drains other resources. Using in-house water resources requires energy to deliver the water to your home. This energy-use increases when you use hot water since a lot of energy goes into heating. Reducing the amount of hot and cold water you use can help conserve both water and energy, cutting down on energy pollution which harms the environment",
        image: "https://images.ctfassets.net/3s5io6mnxfqz/5x9uCOWj0nJAeWTJxkAcb9/f049052575c16a1789ba230bbd9ec8df/AdobeStock_318599955.jpeg?w=828",
        price: 3210
    }

]

export const dataContext = createContext(data);
export const dataContextProvider = dataContext.Provider

export default function useData(){
    return useContext(dataContext);
}