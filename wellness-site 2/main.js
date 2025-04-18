// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');

    // Add event listener for the "Learn More" button
    const meditationButton = document.getElementById('meditationbutton');
    if (meditationButton) {
        meditationButton.addEventListener('click', () => {
            showMeditationDetails();
        });
    }

    const searchBar = document.getElementById('searchBar');
    const resultsContainer = document.getElementById('results');

    // Example data for search functionality
    const data = {
        detox: "Detox helps cleanse your body by removing toxins.",
        meditation: "Meditation improves focus and reduces stress.",
        fitness: "Fitness activities enhance physical and mental health.",
    };

    // Event listener for search input
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (query) {
            resultsContainer.innerHTML = `<p>Results for "${query}"</p>`;
            resultsContainer.style.display = 'block'; // Show the results container
        } else {
            resultsContainer.style.display = 'none'; // Hide the results container if input is empty
        }
    });

    const suggestionsContainer = document.getElementById('suggestions');

    // Ensure the required elements exist
    if (!searchBar || !suggestionsContainer || !resultsContainer) {
        console.error('Search bar, suggestions container, or results container not found in the DOM.');
        return;
    }

    // Data structure for advice
    const adviceData = {
        nutrition: {
            hydration: "When: Throughout the day, especially after physical activity or in hot weather. For what: Maintaining energy levels, supporting digestion, and preventing dehydration. How to: Set reminders to drink water every hour or use a water-tracking app. Brands: Consider using a reusable water bottle like Hydro Flask or CamelBak to track your intake. Examples: Carry a reusable water bottle, drink herbal teas, or eat water-rich foods like cucumbers and watermelon. How it works: Proper hydration helps regulate body temperature, transport nutrients, and remove waste products from the body.",
            protein: "When: Spread throughout the day, especially after exercise. For what: Repairing and building muscles, supporting immune function, and keeping you full. How to: Include lean meats, beans, tofu, or protein shakes in your meals. Brands: Opt for protein powders like Optimum Nutrition Gold Standard or Vega Protein for plant-based options. Examples: Grilled chicken with quinoa, a post-workout protein smoothie, or lentil soup. How it works: Protein provides amino acids, which are the building blocks for muscle repair and growth.",
            carbs: "When: Before physical activity or as part of balanced meals. For what: Providing energy, supporting brain function, and fueling physical performance. How to: Focus on complex carbs like whole grains, vegetables, and legumes. Examples: Oatmeal with berries, brown rice with stir-fried vegetables, or a banana before a workout. How it works: Carbohydrates are broken down into glucose, which fuels your body and brain.",
            fats: "When: Include healthy fats in meals. For what: Supporting brain health, hormone regulation, and providing long-lasting energy. How to: Add avocados, nuts, seeds, or olive oil to your diet. Examples: Avocado toast, a handful of almonds, or a salad with olive oil dressing. How it works: Healthy fats provide essential fatty acids and help absorb fat-soluble vitamins like A, D, E, and K.",
            vitamins: "When: Daily, through meals or supplements. For what: Boosting immunity, improving skin health, and supporting overall well-being. How to: Eat a variety of colorful fruits and vegetables. Examples: A spinach and orange salad, a smoothie with berries and kale, or a multivitamin supplement. How it works: Vitamins act as coenzymes, helping your body perform essential functions like energy production and immune defense.",
            minerals: "When: Daily, through meals or supplements. For what: Strengthening bones, improving muscle function, and supporting oxygen transport. How to: Include foods rich in calcium, magnesium, and iron. Examples: Dairy products, leafy greens, or fortified cereals. How it works: Minerals like calcium strengthen bones, magnesium supports muscle function, and iron helps transport oxygen in the blood.",
            fiber: "When: With meals, especially breakfast. For what: Aiding digestion, preventing constipation, and promoting gut health. How to: Add whole grains, fruits, and vegetables to your diet. Examples: Whole-grain toast with avocado, a fruit salad, or a bowl of oatmeal. Brands: Bob's Red Mill offers high-quality whole-grain products. How it works: Fiber adds bulk to stool, promoting regular bowel movements and feeding beneficial gut bacteria.",
            antioxidants: "When: Daily, through fruits, vegetables, or teas. For what: Protecting cells from damage and reducing the effects of aging. How to: Incorporate antioxidant-rich foods like berries, dark chocolate, and green tea. Examples: A berry smoothie, a square of dark chocolate, or a cup of green tea. Brands: Matcha Love for green tea or Lindt 85% dark chocolate. How it works: Antioxidants neutralize free radicals, preventing oxidative stress and cellular damage.",
            lean: "When: As part of a balanced diet. For what: Supporting weight management and muscle building. How to: Choose lean protein sources like chicken breast, turkey, or fish. Examples: Grilled chicken salad, baked salmon, or turkey wraps. Brands: Perdue for lean chicken or Bumble Bee for canned tuna. How it works: Lean proteins are low in fat and high in essential nutrients.",
            detox: "When: After indulgent meals or as part of a cleanse. For what: Supporting liver function and removing toxins. How to: Drink detox teas or eat foods like lemon, ginger, and leafy greens. Examples: Lemon water, green smoothies, or ginger tea. Brands: Yogi Detox Tea or Traditional Medicinals. How it works: Detox foods support the body's natural cleansing processes.",
            bulking: "When: During muscle-building phases. For what: Increasing calorie intake to support muscle growth. How to: Focus on high-protein and calorie-dense foods. Examples: Oatmeal with peanut butter, steak with sweet potatoes, or protein shakes. Brands: Optimum Nutrition for protein powders. How it works: Bulking provides the energy and nutrients needed for muscle repair and growth.",
            digestion: "When: After meals or as part of a routine. For what: Improving gut health and reducing bloating. How to: Eat fiber-rich foods and fermented products. Examples: Yogurt with probiotics, sauerkraut, or papaya. Brands: Activia for probiotic yogurt or Bubbies for sauerkraut. How it works: Digestive-friendly foods promote healthy gut bacteria and aid in nutrient absorption.",
            supplements: "When: To fill nutritional gaps. For what: Supporting overall health and specific goals. How to: Take supplements like multivitamins, omega-3s, or protein powder. Examples: Vitamin D capsules, fish oil, or whey protein. Brands: Nature Made for multivitamins or Nordic Naturals for omega-3s. How it works: Supplements provide nutrients that may be missing from your diet.",
            focus: "When: During work or study sessions. For what: Enhancing mental clarity and concentration. How to: Eat brain-boosting foods like nuts, seeds, and dark chocolate. Examples: A handful of walnuts, chia seed pudding, or a piece of dark chocolate. Brands: Ghirardelli 72% dark chocolate or Navitas Organics for chia seeds. How it works: These foods improve blood flow to the brain and support cognitive function.",
            energy: "When: Before physical activity or during fatigue. For what: Boosting energy levels and stamina. How to: Eat complex carbs and natural sugars. Examples: A banana, trail mix, or a granola bar. Brands: Clif Bars or KIND Bars for quick energy. How it works: Energy-boosting foods provide quick and sustained fuel for the body.",
            relaxation: "When: During stressful moments or before bed. For what: Calming the mind and body. How to: Drink herbal teas or eat magnesium-rich foods. Examples: Chamomile tea, almonds, or dark leafy greens. Brands: Celestial Seasonings for chamomile tea or Blue Diamond for almonds. How it works: Relaxation foods reduce stress hormones and promote calmness.",
            sleep: "When: Before bedtime. For what: Improving sleep quality. How to: Eat foods rich in tryptophan or melatonin. Examples: Warm milk, cherries, or turkey slices. Brands: Tart Cherry Juice from Lakewood or Organic Valley for milk. How it works: Sleep-friendly foods promote the production of sleep-regulating hormones.",
            morning: "When: At the start of the day. For what: Boosting metabolism and energy. How to: Eat a balanced breakfast with protein and carbs. Examples: Scrambled eggs with toast, oatmeal with fruit, or a smoothie. Brands: Quaker Oats or Vital Farms for eggs. How it works: A nutritious breakfast jumpstarts your metabolism and provides energy for the day.",
            B12: "When: Daily, especially for vegetarians or vegans. For what: Supporting energy production and red blood cell formation. How to: Take B12 supplements or eat fortified foods. Examples: Nutritional yeast, fortified cereals, or B12 capsules. Brands: Bragg for nutritional yeast or Garden of Life for B12 supplements. How it works: Vitamin B12 is essential for energy and nerve function.",
            magnesium: "When: Daily, through meals or supplements. For what: Supporting muscle function and reducing stress. How to: Eat magnesium-rich foods like nuts, seeds, and spinach. Examples: Almonds, pumpkin seeds, or sautéed spinach. Brands: NOW Foods for magnesium supplements or Earthbound Farm for spinach. How it works: Magnesium helps relax muscles and regulate stress hormones.",
            adaptogen: "When: During stressful periods. For what: Supporting the body's stress response. How to: Take adaptogenic herbs like ashwagandha or rhodiola. Examples: Adaptogen teas, capsules, or powders. Brands: Gaia Herbs for ashwagandha or Four Sigmatic for adaptogen blends. How it works: Adaptogens help balance cortisol levels and improve resilience to stress.",
            tryptophan: "When: Before bed or during relaxation. For what: Supporting serotonin and melatonin production. How to: Eat foods like turkey, eggs, or cheese. Examples: Turkey sandwich, scrambled eggs, or a cheese platter. How it works: Tryptophan is an amino acid that promotes relaxation and sleep.",
            collagen: "When: Daily, as part of a beauty or joint health routine. For what: Supporting skin elasticity and joint health. How to: Take collagen supplements or eat collagen-rich foods. Examples: Bone broth, collagen powder, or chicken skin. Brands: Vital Proteins for collagen powder. How it works: Collagen provides the building blocks for healthy skin and joints.",
            superfoods: "When: Daily, for overall health. For what: Providing a nutrient-dense boost. How to: Incorporate superfoods like kale, blueberries, or chia seeds. Examples: A kale salad, a blueberry smoothie, or chia pudding. How it works: Superfoods are rich in vitamins, minerals, and antioxidants.",
            vegetarian: "When: As a lifestyle or dietary choice. For what: Supporting heart health and sustainability. How to: Replace meat with plant-based proteins. Examples: Lentil soup, tofu stir-fry, or veggie burgers. How it works: Vegetarian diets are high in fiber and low in saturated fat.",
            paleo: "When: As a lifestyle or dietary choice. For what: Supporting digestion and reducing inflammation. How to: Focus on whole, unprocessed foods. Examples: Grilled chicken with sweet potatoes, a fruit and nut snack, or baked salmon. How it works: The paleo diet eliminates processed foods and focuses on nutrient-dense options.",
            metabolism: "When: Daily, to support energy and weight management. For what: Boosting metabolic rate. How to: Eat metabolism-boosting foods like green tea, chili peppers, and protein. Examples: Green tea, spicy chicken stir-fry, or a protein shake. How it works: These foods increase calorie burn and support energy production.",
            brain_fog: "When: During periods of mental fatigue. For what: Improving clarity and focus. How to: Eat brain-boosting foods like fatty fish, nuts, and dark chocolate. Examples: Salmon, walnuts, or a piece of dark chocolate. How it works: These foods improve blood flow to the brain and support cognitive function.",
            aging: "When: Daily, for long-term health. For what: Supporting healthy aging and longevity. How to: Eat antioxidant-rich foods like berries, nuts, and green tea. Examples: A berry smoothie, a handful of almonds, or a cup of green tea. How it works: Antioxidants protect cells from damage and reduce the effects of aging.",
            skin: "When: Daily, for healthy skin. For what: Supporting skin hydration and elasticity. How to: Eat foods rich in vitamins A, C, and E. Examples: Carrots, oranges, or almonds. How it works: These vitamins promote collagen production and protect against UV damage.",
            calcium: "When: Daily, for bone health. For what: Supporting strong bones and teeth. How to: Eat calcium-rich foods like dairy, leafy greens, and fortified products. Examples: Milk, kale, or fortified orange juice. How it works: Calcium is essential for bone density and muscle function.",
            smoothies: "When: As a quick meal or snack. For what: Providing a nutrient-dense boost. How to: Blend fruits, vegetables, and protein sources. Examples: A green smoothie with spinach and banana, or a protein smoothie with berries. How it works: Smoothies are an easy way to pack in vitamins and minerals.",
            fast_food: "When: Occasionally, as a convenience option. For what: Satisfying cravings while staying mindful of nutrition. How to: Choose healthier fast-food options. Examples: Grilled chicken sandwiches, salads, or fruit cups. How it works: Making mindful choices can reduce the impact of fast food on your diet.",
            melatonin: "When: Before bedtime. For what: Improving sleep quality. How to: Eat melatonin-rich foods like cherries or take supplements. Examples: Tart cherry juice, walnuts, or melatonin capsules. How it works: Melatonin regulates the sleep-wake cycle and promotes restful sleep.",
            probiotics: "When: Daily, for gut health. For what: Supporting digestion and immune function. How to: Eat fermented foods or take probiotic supplements. Examples: Yogurt, kefir, or sauerkraut. Brands: Activia for yogurt or GT's Kombucha. How it works: Probiotics promote a healthy balance of gut bacteria.",
            meal_prep: "When: Weekly, to save time and eat healthier. For what: Ensuring balanced meals and reducing food waste. How to: Plan and prepare meals in advance. Examples: Cook large batches of grains, proteins, and vegetables. How it works: Meal prep helps you stay organized and make healthier choices.",
            protein_powder: "When: After workouts or as a meal replacement. For what: Supporting muscle repair and growth. How to: Add protein powder to smoothies or shakes. Examples: A post-workout protein shake or a smoothie bowl. Brands: Optimum Nutrition for whey protein or Vega for plant-based options. How it works: Protein powder provides a quick and convenient source of protein.",
            hormone_balance: "When: Daily, for hormonal health. For what: Supporting hormone regulation. How to: Include foods like flaxseeds, avocados, and fatty fish. Examples: Flaxseed smoothie, avocado toast, or grilled salmon. How it works: These foods provide essential nutrients for hormone production and balance.",
            creatine: "When: Before or after workouts. For what: Enhancing muscle strength and recovery. How to: Take creatine supplements or eat creatine-rich foods like red meat. Examples: A creatine shake or a steak dinner. How it works: Creatine helps regenerate ATP, the primary energy source for muscle contractions.",
            menopause: "When: During menopause. For what: Managing symptoms like hot flashes and mood swings. How to: Eat foods rich in phytoestrogens and calcium. Examples: Soy products, leafy greens, or fortified almond milk. How it works: These foods help balance hormones and support bone health.",
            gut: "When: Daily, for digestive health. For what: Supporting gut microbiota and digestion. How to: Eat fiber-rich and fermented foods. Examples: Yogurt, kimchi, or whole grains. How it works: These foods promote healthy gut bacteria and improve digestion.",
            iron: "When: Daily, especially for women or vegetarians. For what: Supporting oxygen transport and energy levels. How to: Eat iron-rich foods like red meat, spinach, and lentils. Examples: Beef stir-fry, spinach salad, or lentil soup. How it works: Iron is essential for hemoglobin production and oxygen delivery.",
            nausea: "When: During nausea or upset stomach. For what: Soothing the stomach and reducing discomfort. How to: Eat ginger or drink herbal teas. Examples: Ginger tea, peppermint tea, or plain crackers. How it works: Ginger and peppermint have natural anti-nausea properties.",
            spices: "When: Daily, to enhance flavor and health. For what: Supporting digestion and reducing inflammation. How to: Use spices like turmeric, ginger, and cinnamon. Examples: Turmeric tea, ginger stir-fry, or cinnamon oatmeal. How it works: Spices contain bioactive compounds that support health.",
            pain_relief: "When: During periods of pain or discomfort. For what: Alleviating pain naturally. How to: Consume foods like cherries, turmeric, and ginger. Examples: Cherry juice, turmeric tea, or ginger soup. How it works: These foods contain natural pain-relieving compounds.",
            arthritis: "When: Daily, for joint health. For what: Reducing arthritis symptoms and inflammation. How to: Eat foods rich in omega-3s and antioxidants. Examples: Salmon, walnuts, or blueberries. How it works: These foods reduce inflammation and support joint health.",
            joint_pain: "When: During joint discomfort. For what: Reducing pain and improving mobility. How to: Consume anti-inflammatory foods like turmeric and omega-3-rich fish. Examples: Turmeric tea, salmon, or chia seed pudding. How it works: These foods reduce inflammation and support joint lubrication.",
            vegetarian: "When: As a lifestyle or dietary choice. For what: Supporting heart health and sustainability. How to: Replace meat with plant-based proteins. Examples: Lentil soup, tofu stir-fry, or veggie burgers. How it works: Vegetarian diets are high in fiber and low in saturated fat.",
            carnivore: "When: As a dietary choice. For what: Supporting muscle growth and reducing carb intake. How to: Focus on animal-based foods like meat, fish, and eggs. Examples: Grilled steak, salmon, or scrambled eggs. How it works: The carnivore diet eliminates carbs and focuses on protein and fat for energy.",
            ethical: "When: As a lifestyle choice. For what: Supporting sustainability and ethical food practices. How to: Choose plant-based or sustainably sourced foods. Examples: Organic vegetables, fair-trade coffee, or plant-based proteins. How it works: Ethical eating reduces environmental impact and supports humane practices.",
            metabolism: "When: Daily, to support energy and weight management. For what: Boosting metabolic rate. How to: Eat metabolism-boosting foods like green tea, chili peppers, and protein. Examples: Green tea, spicy chicken stir-fry, or a protein shake. How it works: These foods increase calorie burn and support energy production.",
            sick: "When: During illness. For what: Supporting recovery and boosting immunity. How to: Eat light, nutrient-rich foods and stay hydrated. Examples: Chicken soup, herbal teas, or electrolyte drinks. How it works: These foods provide nutrients and hydration to aid recovery.",
            flu: "When: During flu symptoms. For what: Supporting recovery and hydration. How to: Drink fluids and eat immune-boosting foods. Examples: Ginger tea, orange juice, or chicken soup. How it works: These foods and drinks help replenish fluids and support the immune system.",
            blood_sugar: "When: Daily, for energy and health. For what: Maintaining stable blood sugar levels. How to: Eat complex carbs and fiber-rich foods. Examples: Brown rice, lentils, or apples. How it works: These foods provide sustained energy and prevent blood sugar spikes.",
            diabetes: "When: Daily, for blood sugar management. For what: Supporting stable blood sugar levels. How to: Eat low-glycemic foods and avoid added sugars. Examples: Quinoa, leafy greens, or nuts. How it works: These foods help regulate blood sugar and prevent spikes.",
            osteoporosis: "When: Daily, for bone health. For what: Reducing the risk of osteoporosis. How to: Eat calcium and vitamin D-rich foods. Examples: Milk, yogurt, or fortified almond milk. How it works: These nutrients strengthen bones and prevent bone loss.",
            anti_inflammatory: "When: Daily, to reduce inflammation. For what: Supporting joint health and reducing chronic inflammation. How to: Add turmeric, ginger, and fatty fish to your meals. Examples: Make turmeric tea, bake salmon with olive oil, or add ginger to a stir-fry. How it works: Anti-inflammatory foods contain bioactive compounds that reduce inflammation and support overall health.",
            spices: "When: Daily, to enhance flavor and health. For what: Supporting digestion and reducing inflammation. How to: Use spices like turmeric, ginger, and cinnamon. Examples: Turmeric tea, ginger stir-fry, or cinnamon oatmeal. How it works: Spices contain bioactive compounds that support health.",
            fermented: "When: Regularly, for gut health. For what: Supporting digestion and boosting probiotics. How to: Eat fermented foods like kimchi, yogurt, or kombucha. Examples: A bowl of kimchi, a glass of kombucha, or Greek yogurt. How it works: Fermented foods contain probiotics that improve gut microbiota.",
            vitamin_C: "When: Daily, for immune support. For what: Boosting immunity and skin health. How to: Eat citrus fruits, bell peppers, or strawberries. Examples: Orange juice, a fruit salad, or red bell pepper slices. How it works: Vitamin C is a powerful antioxidant that supports the immune system and collagen production.",
            vitamin_D: "When: Daily, especially in winter or for those with limited sun exposure. For what: Supporting bone health and immunity. How to: Take supplements or eat fortified foods. Examples: Fortified milk, salmon, or vitamin D capsules. How it works: Vitamin D helps the body absorb calcium and supports immune function.",
            vitamin_A: "When: Daily, for vision and skin health. For what: Supporting eye health and immune function. How to: Eat foods like carrots, sweet potatoes, and spinach. Examples: Carrot sticks, baked sweet potatoes, or a spinach salad. How it works: Vitamin A is essential for vision, skin health, and immune defense.",
            longevity: "When: Daily, for long-term health. For what: Supporting a longer, healthier life. How to: Eat antioxidant-rich and nutrient-dense foods. Examples: Blueberries, kale, or green tea. How it works: These foods protect cells and reduce the risk of chronic diseases.",

        },
        meditation: {
            mindfulness: "When: Daily, especially in the morning or during stressful moments. For what: Staying present, reducing stress, and improving focus. How to: Practice deep breathing and focus on the present moment. Apps: Use apps like Headspace or Calm for guided mindfulness sessions. Examples: Spend 5 minutes observing your breath or use a mindfulness app like Headspace. How it works: Mindfulness activates the parasympathetic nervous system, reducing stress and improving emotional regulation. Resources: Search 'Mindfulness Meditation for Beginners' on YouTube or download the Calm app.",
            stress: "When: During moments of high stress or anxiety. For what: Lowering cortisol levels and calming the mind. How to: Practice progressive muscle relaxation or guided breathing exercises. Apps: Use apps like Insight Timer or Calm for stress-relief meditations. Examples: Follow a guided stress-relief meditation on YouTube or use an app like Headspace. How it works: Stress-relief meditation reduces the activity of the amygdala, the brain's stress center, and promotes relaxation by activating the parasympathetic nervous system. Resources: Look for 'Stress Relief Guided Meditation' on YouTube or try the 'Stress Less' program on Calm.",
            relaxation: "When: Before bed or during breaks. For what: Calming the mind and reducing tension. How to: Try body scans or gentle yoga stretches. Examples: Lie down and focus on relaxing each part of your body or do a 10-minute bedtime yoga routine. How it works: Relaxation techniques lower heart rate and blood pressure, promoting a sense of calm. Resources: Search 'Body Scan Meditation' on YouTube or use the 'Relax & Sleep Well' app by Glenn Harrold.",
            focus: "When: Before starting work or studying. For what: Improving concentration and productivity. How to: Use single-pointed focus meditation by concentrating on a specific object, such as a candle flame or a mantra. Examples: Light a candle and focus on the flame for 5 minutes, or repeat a mantra like 'focus' silently. How it works: Focused meditation trains the brain to ignore distractions and sustain attention for longer periods, improving cognitive performance. Resources: Search 'Focus Meditation Techniques' on YouTube or try the 'Focus Timer' feature in the Insight Timer app.",
            gratitude: "When: At the start or end of the day. For what: Fostering happiness and appreciation. How to: Reflect on things you're grateful for or write them down. Tools: Use a gratitude journal like The Five-Minute Journal to make this a daily habit. Examples: Keep a gratitude journal or mentally list three things you're thankful for before bed. How it works: Gratitude shifts focus from negative to positive experiences, boosting mood and overall well-being. Resources: Search 'Gratitude Meditation' on YouTube or use the 'Gratitude' section in the Calm app.",
            sleep: "When: Before bedtime. For what: Relaxing the mind and improving sleep quality. How to: Practice deep breathing, progressive muscle relaxation, or guided sleep meditations. Examples: Listen to a sleep meditation track, focus on slow breathing, or visualize a calming scene. How it works: Meditation reduces stress hormones like cortisol and activates the parasympathetic nervous system, promoting restful sleep. Resources: Search 'Sleep Meditation' on YouTube or use the 'Sleep Stories' feature in the Calm app.",
            spiritual: "When: During quiet, reflective moments. For what: Enhancing spiritual growth and inner peace. How to: Use prayer, mantra repetition, or reflective journaling. Examples: Chant a mantra, meditate in a quiet space, or write about your spiritual goals. How it works: Spiritual meditation fosters a sense of purpose and connection, reducing stress and improving emotional well-being. Resources: Search 'Spiritual Meditation Techniques' on YouTube or explore the 'Spiritual Growth' section in Insight Timer.",
            guided: "When: Anytime you need structured meditation. For what: Providing step-by-step guidance for relaxation or focus. How to: Use apps or audio recordings for guided meditation. Examples: Follow a guided meditation on YouTube or use an app like Calm. How it works: Guided meditation helps beginners stay focused and achieve relaxation. Resources: Search 'Guided Meditation for Beginners' on YouTube or use the 'Daily Calm' feature in the Calm app.",
            transcendental: "When: Twice daily, for 20 minutes each session. For what: Reducing stress and improving mental clarity. How to: Sit comfortably and silently repeat a mantra. Examples: Practice transcendental meditation with a certified teacher. How it works: Transcendental meditation uses mantras to settle the mind into a state of restful awareness. Resources: Visit the official Transcendental Meditation website or search 'Transcendental Meditation Explained' on YouTube.",
            buddhist: "When: Daily, as part of a spiritual practice. For what: Cultivating mindfulness, compassion, and detachment. How to: Practice techniques like Vipassana or Metta meditation. Examples: Attend a Buddhist meditation retreat or follow online teachings. How it works: Buddhist meditation focuses on mindfulness and insight to reduce suffering. Resources: Search 'Vipassana Meditation for Beginners' or 'Metta Meditation' on YouTube.",
            clear_mind: "When: During moments of overwhelm. For what: Clearing mental clutter and improving focus. How to: Focus on your breath or a calming object. Examples: Sit quietly and observe your thoughts without judgment. How it works: Clear-mind meditation helps declutter the mind and improve mental clarity. Resources: Search 'Clear Mind Meditation' on YouTube or use the 'Clarity' section in Insight Timer.",
            positive: "When: Anytime you need a mood boost. For what: Cultivating positive emotions and reducing negativity. How to: Focus on affirmations or positive imagery. Examples: Visualize a happy memory or repeat positive affirmations. How it works: Positive meditation rewires the brain to focus on uplifting thoughts. Resources: Search 'Positive Affirmation Meditation' on YouTube or use the 'Positivity' section in the Calm app.",
            calming: "When: During stressful situations. For what: Reducing anxiety and promoting relaxation. How to: Use calming techniques like deep breathing or visualization. Examples: Imagine a peaceful beach or listen to calming music. How it works: Calming meditation activates the parasympathetic nervous system, reducing stress. Resources: Search 'Calming Meditation for Anxiety' on YouTube or use the 'Calm Anxiety' program in the Calm app.",
            stress_relief: "When: During or after stressful events. For what: Lowering cortisol levels and promoting relaxation. How to: Practice progressive muscle relaxation or guided imagery. Examples: Follow a stress-relief meditation on an app. How it works: Stress-relief meditation reduces the body's stress response. Resources: Search 'Stress Relief Meditation' on YouTube or use the 'Stress Less' program in Calm.",
            silent: "When: Anytime you need quiet reflection. For what: Deepening self-awareness and inner peace. How to: Sit in silence and observe your thoughts. Examples: Meditate in a quiet room or nature. How it works: Silent meditation allows the mind to settle and promotes introspection. Resources: Search 'Silent Meditation Techniques' on YouTube or explore the 'Silent Retreats' section in Insight Timer.",
            breathing_exercises: "When: Anytime you feel anxious or unfocused. For what: Regulating breathing and calming the mind. How to: Practice techniques like box breathing or diaphragmatic breathing. Examples: Inhale for 4 counts, hold for 4, exhale for 4, and repeat. How it works: Breathing exercises reduce stress and improve oxygen flow. Resources: Search 'Box Breathing Tutorial' on YouTube or use the 'Breathing Exercises' feature in Calm.",
            tips: "When: Before starting meditation. For what: Enhancing your meditation practice. How to: Set a timer, find a quiet space, and sit comfortably. Examples: Use a meditation cushion or follow a beginner's guide. How it works: Meditation tips help create a consistent and effective practice. Resources: Search 'Meditation Tips for Beginners' on YouTube or read articles on the Headspace blog.",
            manifestation: "When: During goal-setting or visualization. For what: Attracting positive outcomes and achieving goals. How to: Visualize your goals as if they are already achieved. Examples: Imagine yourself succeeding in a job interview. How it works: Manifestation meditation focuses the mind on positive outcomes. Resources: Search 'Manifestation Meditation' on YouTube or use the 'Manifestation' section in Insight Timer.",
            visualize: "When: Anytime you need clarity or motivation. For what: Creating mental images of desired outcomes. How to: Close your eyes and imagine a specific scenario. Examples: Visualize yourself achieving a personal goal. How it works: Visualization strengthens neural pathways associated with success. Resources: Search 'Visualization Meditation' on YouTube or use the 'Visualization' section in Calm.",
            body_scan: "When: Before bed or during relaxation. For what: Releasing tension and improving body awareness. How to: Focus on each part of your body, from head to toe. Examples: Lie down and mentally scan your body for tension. How it works: Body-scan meditation promotes relaxation and reduces stress. Resources: Search 'Body Scan Meditation' on YouTube or use the 'Body Scan' feature in Insight Timer.",
            loving_kindness: "When: Anytime you want to cultivate compassion. For what: Fostering love and kindness towards yourself and others. How to: Repeat phrases of goodwill towards yourself and others. Examples: 'May I be happy, may I be healthy.' How it works: Loving-kindness meditation promotes empathy and emotional well-being. Resources: Search 'Loving Kindness Meditation' on YouTube or use the 'Compassion' section in Insight Timer.",
            msbr: "When: Daily, as part of a stress-reduction program. For what: Managing stress and improving well-being. How to: Follow an MBSR (Mindfulness-Based Stress Reduction) program. Examples: Join an MBSR course or practice guided meditations. How it works: MBSR combines mindfulness and body awareness to reduce stress. Resources: Search 'MBSR Meditation' on YouTube or explore MBSR programs online.",
            mental_clarity: "When: Anytime you feel mentally foggy. For what: Improving focus and decision-making. How to: Practice mindfulness or single-pointed focus. Examples: Meditate on a candle flame or repeat a mantra. How it works: Mental-clarity meditation sharpens focus and clears distractions. Resources: Search 'Mental Clarity Meditation' on YouTube or use the 'Clarity' section in Calm.",
            detachment: "When: During times in life when you feel stuck. For what: Letting go of attachments to external outcomes. How to: Allow your thoughts and emotions to exist freely without trying to control them. Examples: Michael Seely on YouTube: Detachment from Thoughts. How it works: Detachment allows our state of being to exist without resisting and creating more pain. Resources: Search 'Detachment Meditation' on YouTube or explore the 'Letting Go' section in Insight Timer.",
            healing: "When: During recovery or emotional pain. For what: Promoting physical and emotional healing. How to: Visualize healing energy flowing through your body. Examples: Use guided healing meditations or practice Reiki. How it works: Healing meditation supports the body's natural recovery processes. Resources: Search 'Healing Meditation' on YouTube or use the 'Healing' section in Calm.",
            motivation: "When: Before starting a task or project. For what: Boosting energy and drive. How to: Focus on affirmations or visualize success. Examples: Meditate on your goals or listen to motivational tracks. How it works: Motivation meditation energizes the mind and fosters determination. Resources: Search 'Motivational Meditation' on YouTube or use the 'Motivation' section in Insight Timer.",
            rehearsal: "When: Before important events. For what: Mentally preparing for success. How to: Visualize yourself performing well in a specific scenario. Examples: Rehearse a presentation or athletic performance in your mind. How it works: Rehearsal meditation builds confidence and reduces anxiety. Resources: Search 'Rehearsal Meditation' on YouTube or use the 'Performance' section in Calm.",
            mantras: "When: During meditation or prayer. For what: Focusing the mind and promoting relaxation. How to: Repeat a mantra silently or aloud. Examples: Use mantras like 'Om' or 'Peace' during meditation. How it works: Mantras anchor the mind and enhance concentration. Resources: Search 'Mantra Meditation' on YouTube or explore mantra guides in Insight Timer.",
            sound: "When: During meditation or relaxation. For what: Enhancing focus and relaxation through sound. How to: Use sound bowls, chimes, or meditation music. Examples: Meditate with Tibetan singing bowls or nature sounds. How it works: Sound meditation uses vibrations to calm the mind. Resources: Search 'Sound Bowl Meditation' on YouTube or use the 'Sound Healing' section in Calm.",
            chanting: "When: During spiritual or group meditation. For what: Fostering connection and focus. How to: Chant mantras or affirmations aloud. Examples: Join a chanting circle or practice alone. How it works: Chanting meditation combines sound and rhythm to deepen focus. Resources: Search 'Chanting Meditation' on YouTube or explore chanting practices in Insight Timer.",
            chakra: "When: During energy-balancing practices. For what: Aligning and balancing energy centers. How to: Focus on each chakra and visualize its color. Examples: Meditate on the heart chakra for love and compassion. How it works: Chakra meditation balances the body's energy flow. Resources: Search 'Chakra Meditation' on YouTube or use the 'Chakra Healing' section in Calm.",
            depression: "When: During low moods or emotional struggles. For what: Improving mood and reducing negative thoughts. How to: Use a guided meditation specifically designed for depression, focusing on self-compassion and acceptance. Examples: Use a guided meditation app like Calm or Insight Timer with a focus on depression, or practice a 10-minute self-compassion meditation. How it works: Meditation for depression helps regulate the brain's emotional centers, reducing overactivity in areas associated with negative thoughts and fostering a sense of calm and self-acceptance. Resources: Search 'Meditation for Depression' on YouTube or use the 'Emotional Healing' section in Insight Timer.",
            fear: "When: During moments of anxiety or fear. For what: Reducing fear and promoting courage. How to: Focus on your breath and observe your fear without judgment. Examples: Use guided meditations for overcoming fear. How it works: Fear meditation helps process and release negative emotions. Resources: Search 'Overcoming Fear Meditation' on YouTube or use the 'Courage' section in Calm.",
            shame: "When: During feelings of guilt or shame. For what: Cultivating self-compassion and forgiveness. How to: Practice loving-kindness or self-compassion meditation. Examples: Meditate on affirmations like 'I am enough.' How it works: Shame meditation fosters self-acceptance and emotional healing. Resources: Search 'Meditation for Shame and Guilt' on YouTube or use the 'Self-Compassion' section in Insight Timer."
        },
        fitness: {
        yoga: "When: Daily or as part of a fitness routine. For what: Enhancing flexibility, reducing stress, and improving posture. How to: Look up yoga practices for your desired goal on YouTube. Steps: Start with beginner poses like downward dog, child's pose, and warrior pose. Gradually increase difficulty as you build strength and flexibility. Examples: Join a yoga class, follow a YouTube tutorial, or practice at home with a mat. How it works: Yoga stretches and strengthens muscles while calming the mind through controlled breathing.",
     cardio: "When: 3-5 times a week, for at least 30 minutes. For what: Boosting cardiovascular health and endurance. How to: Engage in activities like running, cycling, or swimming. Steps: Warm up for 5-10 minutes, maintain a steady pace, and cool down with light stretching. Examples: Go for a morning jog, take a spin class, or swim laps at the pool. How it works: Cardio increases heart rate, improving oxygen delivery to muscles and burning calories.",
    strength: "When: 2-4 times a week, with rest days in between. For what: Building muscle, boosting metabolism, and improving bone density. How to: Use weights, resistance bands, or bodyweight exercises. Steps: Focus on compound movements like squats, deadlifts, and bench presses. Perform 3-4 sets of 8-12 reps for each exercise. Examples: Perform squats, push-ups, or deadlifts. How it works: Strength training creates micro-tears in muscle fibers, which rebuild stronger during recovery.",
    flexibility: "When: Before or after workouts, or as a standalone session. For what: Reducing stiffness, improving range of motion, and preventing injuries. How to: Stretch major muscle groups or practice yoga. Steps: Hold each stretch for 20-30 seconds without bouncing. Focus on deep breathing to relax muscles. Examples: Perform hamstring stretches, shoulder rolls, or yoga poses like cobra. How it works: Flexibility exercises lengthen muscles and improve joint mobility, reducing the risk of injury.",
    recovery: "When: On rest days or after intense exercise. For what: Helping muscles heal and reducing soreness. How to: Use foam rollers, stretch, or take an Epsom salt bath. Steps: Spend 5-10 minutes foam rolling tight areas, followed by light stretching. Examples: Perform light stretching, use a foam roller on sore muscles, or take a warm bath. How it works: Recovery techniques improve blood flow to muscles, reducing inflammation and promoting healing.",
    endurance: "When: 2-3 times a week, gradually increasing intensity. For what: Improving stamina and physical performance. How to: Engage in activities like running, swimming, or cycling. Steps: Start with shorter sessions and gradually increase duration or intensity. Incorporate interval training for faster progress. Examples: Go for a long-distance run, swim laps, or cycle on a hilly route. How it works: Endurance training improves cardiovascular efficiency and increases the body's ability to use oxygen.",
    balance: "When: As part of a fitness routine or during warm-ups. For what: Enhancing coordination and preventing falls. How to: Practice balance exercises like standing on one leg or using a balance board. Steps: Start with simple exercises like single-leg stands, then progress to dynamic movements like lunges on an unstable surface. Examples: Perform tree pose in yoga, use a stability ball, or try single-leg squats. How it works: Balance exercises strengthen stabilizing muscles and improve proprioception, reducing the risk of falls.",
    functional: "When: 2-3 times a week. For what: Preparing the body for everyday activities and improving overall fitness. How to: Perform exercises that mimic daily movements, like squats or lunges. Steps: Focus on multi-joint movements like kettlebell swings, farmer's carries, and step-ups. Examples: Practice deadlifts, kettlebell swings, or farmer's carries. How it works: Functional training strengthens multiple muscle groups simultaneously, improving coordination and overall strength.",
    gym: "When: Regularly, as part of a fitness routine. For what: Accessing a variety of equipment and structured workouts. How to: Use gym machines, free weights, or join group classes. Steps: Start with a warm-up, follow a structured workout plan, and cool down with stretching. Examples: Perform bench presses, use a treadmill, or attend a spin class. How it works: Gyms provide a controlled environment for targeted fitness goals.",
    beginner: "When: Starting a fitness journey. For what: Building a foundation of strength and endurance. How to: Begin with light weights, bodyweight exercises, or low-intensity cardio. Steps: Start with simple exercises like bodyweight squats, push-ups, or walking. Gradually increase intensity as your fitness improves. Examples: Perform bodyweight squats, walk on a treadmill, or try beginner yoga. How it works: Beginner routines help your body adapt to physical activity gradually.",
    walking: "When: Daily or as a low-impact workout. For what: Improving cardiovascular health and mental clarity. How to: Walk at a steady pace for at least 30 minutes. Steps: Start with a warm-up walk for 5 minutes, then maintain a brisk pace. Cool down with light stretching. Examples: Take a brisk walk in the park or use a treadmill. How it works: Walking increases heart rate and burns calories without straining joints.",
    HIIT: "When: 2-3 times a week. For what: Burning fat and improving cardiovascular fitness. How to: Alternate between 30 seconds of high-intensity exercises (e.g., sprints, burpees) and 30 seconds of rest. Steps: Perform a warm-up, then complete 10 rounds of high-intensity intervals followed by rest. Cool down with light stretching. Examples: Perform 20-second sprints followed by 40 seconds of walking. How it works: HIIT boosts metabolism and burns calories in a short time, improving both aerobic and anaerobic fitness.",
    mental_health: "When: Regularly, as part of a fitness routine. For what: Reducing stress and improving mood. How to: Engage in activities like yoga, running, or strength training. Steps: Incorporate mindfulness or meditation into your fitness routine to enhance mental well-being. Examples: Meditate after a workout or go for a calming run. How it works: Exercise releases endorphins, which improve mental well-being.",
    calisthenics: "When: Anytime, using bodyweight exercises. For what: Building strength and flexibility. How to: Perform push-ups, pull-ups, or planks. Steps: Start with basic movements like push-ups and squats, then progress to advanced exercises like handstands or muscle-ups. Examples: Do a calisthenics circuit at home or in a park. How it works: Calisthenics uses bodyweight resistance to strengthen muscles.",
    resistance_bands: "When: During strength training or recovery. For what: Adding resistance to exercises. How to: Use bands for squats, rows, or stretches. Steps: Anchor the band securely and perform controlled movements to maximize resistance. Examples: Perform resistance band squats or shoulder presses. How it works: Resistance bands provide variable resistance, improving strength and flexibility.",
    pull_ups: "When: As part of an upper-body workout. For what: Strengthening back, shoulders, and arms. How to: Use a pull-up bar or assisted machine. Steps: Start with an overhand grip, pull your chin above the bar, and lower yourself slowly. Examples: Perform wide-grip pull-ups or chin-ups. How it works: Pull-ups target multiple upper-body muscles simultaneously.",
    dumbbell: "When: During strength training. For what: Building muscle and improving balance. How to: Use dumbbells for exercises like curls, presses, or rows. Steps: Focus on proper form and controlled movements. Gradually increase weight as you build strength. Examples: Perform dumbbell bench presses or bicep curls. How it works: Dumbbells allow for a full range of motion and unilateral training.",
    rowing: "When: As part of a cardio or full-body workout. For what: Improving endurance and strengthening muscles. How to: Use a rowing machine by following these steps: 1. Sit on the rowing machine and secure your feet in the foot straps. 2. Grab the handle with both hands, keeping your arms straight and your back upright. 3. Push off with your legs, extending them fully while keeping your arms straight. 4. Once your legs are extended, lean back slightly and pull the handle towards your chest. 5. Reverse the motion by extending your arms, leaning forward, and bending your knees to return to the starting position. Examples: Perform 10-minute rowing intervals or a 500-meter sprint. How it works: Rowing engages the legs, core, and upper body for a full-body workout.",
    biceps: "When: During upper-body strength training. For what: Building arm strength and size. How to: Perform curls or pull-ups. Steps: Use a controlled motion to lift and lower the weight, focusing on the contraction of the biceps. Examples: Do barbell curls or hammer curls. How it works: Bicep exercises isolate the muscles for targeted growth.",
    chest: "When: During upper-body workouts. For what: Strengthening chest muscles and improving posture. How to: Perform bench presses, push-ups, or flys. Steps: Focus on a full range of motion and controlled movements to engage the chest muscles. Examples: Use a barbell for bench presses or dumbbells for chest flys. How it works: Chest exercises target the pectoral muscles for strength and definition.",
    core: "When: Regularly, as part of a fitness routine. For what: Improving stability and posture. How to: Perform planks, crunches, or leg raises. Steps: Engage your core muscles throughout the movement and avoid arching your back. Examples: Do a 1-minute plank or bicycle crunches. How it works: Core exercises strengthen abdominal and stabilizing muscles.",
    hips: "When: During lower-body workouts or mobility sessions. For what: Improving flexibility and strength. How to: Perform hip bridges, stretches, or lunges. Steps: Focus on activating the glutes and hip flexors during each movement. Examples: Do hip thrusts or pigeon pose stretches. How it works: Hip exercises improve mobility and support lower-body movements.",
    ankles: "When: During warm-ups or recovery. For what: Enhancing stability and preventing injuries. How to: Perform ankle circles, stretches, or resistance exercises. Steps: Use slow, controlled movements to strengthen stabilizing muscles around the ankle. Examples: Use a resistance band for ankle dorsiflexion. How it works: Ankle exercises strengthen stabilizing muscles and improve balance.",
    forearms: "When: During upper-body strength training. For what: Improving grip strength. How to: Perform wrist curls or farmer's carries. Steps: Use a controlled motion to lift and lower weights, focusing on the forearm muscles. Examples: Use dumbbells for wrist curls or hold heavy weights for grip endurance. How it works: Forearm exercises enhance grip strength and support other lifts.",
    jawline: "When: As part of facial exercises. For what: Strengthening jaw muscles and improving appearance. How to: Perform jaw stretches or resistance exercises. Steps: Use slow, controlled movements to engage the jaw muscles. Examples: Use a jaw exerciser or practice chewing exercises. How it works: Jawline exercises target facial muscles for tone and definition.",
    back: "When: During upper-body workouts. For what: Strengthening back muscles and improving posture. How to: Perform rows, pull-ups, or deadlifts. Steps: Keep your back straight and engage your core during each movement. Examples: Do barbell rows or lat pulldowns. How it works: Back exercises target the lats, traps, and rhomboids for strength and stability.",
    reardelts: "When: During shoulder workouts. For what: Strengthening rear deltoid muscles. How to: Perform reverse flys or face pulls. Steps: Use a controlled motion to engage the rear delts and avoid using momentum. Examples: Use dumbbells for reverse flys or cables for face pulls. How it works: Rear delt exercises improve shoulder stability and posture.",
    shoulders: "When: During upper-body workouts. For what: Building shoulder strength and size. How to: Perform presses, lateral raises, or shrugs. Steps: Focus on controlled movements and avoid overloading the shoulder joints. Examples: Do overhead presses or lateral raises with dumbbells. How it works: Shoulder exercises target the deltoid muscles for strength and definition.",
    traps: "When: During upper-body strength training. For what: Strengthening trapezius muscles. How to: Perform shrugs or upright rows. Steps: Keep your shoulders relaxed and use a full range of motion to engage the traps. Examples: Use dumbbells for shrugs or a barbell for upright rows. How it works: Trap exercises improve neck and upper-back strength.",
    quads: "When: During lower-body workouts. For what: Strengthening quadriceps muscles. How to: Perform squats, lunges, or leg presses. Steps: Focus on keeping your knees aligned with your toes and avoid locking your knees at the top of the movement. Examples: Do barbell squats or Bulgarian split squats. How it works: Quad exercises target the front thigh muscles for strength and stability.",
    hamstrings: "When: During lower-body workouts. For what: Strengthening hamstring muscles. How to: Perform deadlifts, leg curls, or bridges. Steps: Keep your back straight during deadlifts and focus on engaging the hamstrings throughout the movement. Examples: Do Romanian deadlifts or hamstring curls. How it works: Hamstring exercises improve posterior chain strength and flexibility.",
    legs: "When: Regularly, as part of a fitness routine. For what: Building lower-body strength and endurance. How to: Perform squats, lunges, or step-ups. Steps: Use proper form to avoid knee strain and engage multiple muscle groups. Examples: Do barbell squats or walking lunges. How it works: Leg exercises target multiple muscle groups for overall strength.",
    glute: "When: During lower-body workouts. For what: Strengthening glute muscles and improving posture. How to: Perform hip thrusts, squats, or deadlifts. Steps: Squeeze your glutes at the top of each movement for maximum activation. Examples: Do barbell hip thrusts or glute bridges. How it works: Glute exercises target the largest muscle group for power and stability.",
    knees: "When: During mobility or recovery sessions. For what: Strengthening and stabilizing knee joints. How to: Perform step-ups, lunges, or stretches. Steps: Avoid overextending your knees and focus on controlled movements. Examples: Do bodyweight lunges or quad stretches. How it works: Knee exercises improve joint health and prevent injuries.",
    immune_system: "When: Regularly, as part of a fitness routine. For what: Boosting immunity through physical activity. How to: Engage in moderate-intensity exercises like walking or cycling. Steps: Maintain a consistent routine to support overall health. Examples: Go for a brisk walk or do light yoga. How it works: Exercise improves circulation and supports immune function.",
    nervous_system: "When: During recovery or relaxation. For what: Calming the nervous system and reducing stress. How to: Practice yoga, meditation, or light stretching. Steps: Focus on deep breathing and slow, controlled movements. Examples: Do a gentle yoga session or deep breathing exercises. How it works: Fitness activities regulate the nervous system and promote relaxation.",
    quick_workout: "When: Anytime you have limited time. For what: Staying active and maintaining fitness. How to: Perform a 10-minute circuit of bodyweight exercises. Steps: Alternate between exercises with minimal rest to maximize efficiency. Examples: Do push-ups, squats, and planks in quick succession. How it works: Quick workouts keep you active and energized.",
    morning: "When: At the start of the day. For what: Boosting energy and metabolism. How to: Perform light cardio or stretching. Steps: Start with a gentle warm-up to wake up your body. Examples: Go for a morning jog or do sun salutations. How it works: Morning workouts wake up your body and prepare you for the day.",
    digestion: "When: After meals or as part of a routine. For what: Supporting digestion and improving gut health. How to: Perform light yoga or walking. Steps: Avoid intense movements immediately after eating. Examples: Do a gentle yoga twist or take a post-meal walk. How it works: Fitness activities stimulate digestion and improve gut health.",
    mental_clarity: "When: Anytime you need focus. For what: Clearing the mind and improving concentration. How to: Perform light cardio or yoga. Steps: Focus on your breathing and maintain a steady pace. Examples: Go for a walk or do a short yoga session. How it works: Exercise increases blood flow to the brain, enhancing mental clarity.",
    energy: "When: Anytime you feel fatigued. For what: Boosting energy levels. How to: Perform quick, high-intensity exercises. Steps: Use explosive movements to increase your heart rate and circulation. Examples: Do jumping jacks or a short HIIT session. How it works: Exercise releases endorphins and improves circulation, increasing energy.",
    fasting: "When: During intermittent fasting routines. For what: Supporting fat loss and maintaining muscle. How to: Perform light cardio or strength training. Steps: Avoid overexertion and focus on low-intensity exercises. Examples: Do a fasted walk or bodyweight exercises. How it works: Exercise during fasting enhances fat burning and metabolic health.",
    aesthetic: "When: Regularly, as part of a fitness routine. For what: Improving physical appearance. How to: Focus on strength training and cardio. Steps: Combine resistance training with a balanced diet for optimal results. Examples: Perform weightlifting for muscle tone or cardio for fat loss. How it works: Fitness activities sculpt the body and enhance aesthetics.",
    toned: "When: Regularly, as part of a fitness routine. For what: Achieving a lean and defined physique. How to: Perform strength training and light cardio. Steps: Use higher repetitions with moderate weights to build muscle definition. Examples: Do resistance band workouts or Pilates. How it works: Toning exercises build muscle definition and reduce fat.",
    cut: "When: During a cutting phase. For what: Reducing body fat while maintaining muscle. How to: Combine strength training with a calorie deficit. Steps: Focus on compound movements and track your caloric intake. Examples: Do weightlifting and cardio. How it works: Cutting workouts burn fat and preserve muscle mass.",
    bulking: "When: During a bulking phase. For what: Building muscle mass. How to: Focus on heavy strength training and a calorie surplus. Steps: Gradually increase your caloric intake and prioritize progressive overload. Examples: Perform compound lifts like squats and deadlifts. How it works: Bulking workouts stimulate muscle growth and strength.",
    mobility: "When: During warm-ups or recovery. For what: Improving joint flexibility and range of motion. How to: Perform dynamic stretches or yoga poses targeting specific joints. Steps: Move through a full range of motion and avoid rushing. Examples: Do hip openers, shoulder stretches, or ankle circles. How it works: Mobility exercises enhance movement efficiency and reduce the risk of injuries.",
    stature: "When: Regularly, as part of a fitness routine. For what: Improving posture and alignment. How to: Perform exercises that strengthen the back and core. Steps: Focus on maintaining a neutral spine during movements. Examples: Do planks or rows. How it works: Fitness activities improve posture and overall stature.",
    stretching: "When: Before or after workouts. For what: Enhancing flexibility and reducing muscle tension. How to: Perform static or dynamic stretches. Steps: Hold each stretch for 20-30 seconds and avoid bouncing. Examples: Do hamstring stretches or arm circles. How it works: Stretching improves flexibility and reduces the risk of injury."
}
    };

    // Collect all keywords from adviceData
    const keywords = Object.keys(adviceData.nutrition)
        .concat(Object.keys(adviceData.meditation))
        .concat(Object.keys(adviceData.fitness));

    // Add event listener for input in the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        resultsContainer.innerHTML = ''; // Clear previous results

        if (query.length >= 2) { // Show suggestions only if the input has at least 2 characters
            const filteredSuggestions = [];

            // Search through each category in adviceData
            Object.keys(adviceData).forEach(category => {
                // Check if the category matches the query
                if (category.toLowerCase().startsWith(query)) {
                    filteredSuggestions.push({ category, keyword: category }); // Add the category itself as a suggestion
                }

                // Check if any keywords in the category match the query
                Object.keys(adviceData[category]).forEach(keyword => {
                    if (keyword.toLowerCase().startsWith(query)) {
                        filteredSuggestions.push({ category, keyword }); // Add the keyword as a suggestion
                    }
                });
            });

            if (filteredSuggestions.length > 0) {
                suggestionsContainer.style.display = 'block'; // Show suggestions container
                filteredSuggestions.forEach(({ category, keyword }) => {
                    const suggestion = document.createElement('div');
                    suggestion.textContent = `${keyword} (${category})`; // Display keyword or category with its type
                    suggestion.style.padding = '8px';
                    suggestion.style.cursor = 'pointer';
                    suggestion.style.borderBottom = '1px solid #ddd'; // Add a border for better visibility

                    // Add click event to set the search bar value and trigger the search
                    suggestion.addEventListener('click', () => {
                        searchBar.value = keyword; // Set the search bar value to the selected keyword
                        suggestionsContainer.style.display = 'none'; // Hide suggestions
                        searchAdvice(keyword); // Trigger the search function with the selected keyword
                    });

                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                suggestionsContainer.style.display = 'none'; // Hide suggestions if no matches
            }
        } else {
            suggestionsContainer.style.display = 'none'; // Hide suggestions if input is less than 2 characters
        }

        // Automatically search when the user types a full keyword
        const flattenedKeywords = Object.keys(adviceData.nutrition)
            .concat(Object.keys(adviceData.meditation))
            .concat(Object.keys(adviceData.fitness));
        if (flattenedKeywords.includes(query)) {
            searchAdvice(query); // Trigger the search function if the query matches a keyword
        }
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim();
        if (query) {
            searchAdvice(query);
        } else {
            resultsContainer.style.display = 'none'; // Hide results if input is empty
        }
    });

    // Function to search and display results
    function searchAdvice(query) {
        console.log("Search query:", query); // Debugging
        const results = [];

        // Flatten the adviceData structure for easier searching
        const flattenedData = flattenAdviceData(adviceData);

        // Search through the flattened data
        for (const [keyword, { category, advice }] of Object.entries(flattenedData)) {
            if (keyword.toLowerCase() === query.toLowerCase().trim()) {
                // Format the advice into sections
                const formattedAdvice = advice
                    .split('. ')
                    .map((sentence) => {
                        if (sentence.startsWith('When:')) return `<strong>When:</strong> ${sentence.slice(5)}`;
                        if (sentence.startsWith('For what:')) return `<strong>For what:</strong> ${sentence.slice(9)}`;
                        if (sentence.startsWith('How to:')) return `<strong>How to:</strong> ${sentence.slice(8)}`;
                        if (sentence.startsWith('Steps:')) return `<strong>Steps:</strong> ${sentence.slice(7)}`;
                        if (sentence.startsWith('Examples:')) return `<strong>Examples:</strong> ${sentence.slice(9)}`;
                        if (sentence.startsWith('Brands:')) return `<strong>Brands:</strong> ${sentence.slice(7)}`;
                        if (sentence.startsWith('Resources:')) return `<strong>Resources:</strong> ${sentence.slice(10)}`;
                        return sentence;
                    })
                    .join('<br>');

                results.push(`
                    <div class="result-item">
                        <h3>${keyword.toUpperCase()} (${category})</h3>
                        <p>${formattedAdvice}</p>
                    </div>
                `);
            }
        }

        // Display results
        if (results.length > 0) {
            resultsContainer.innerHTML = results.join('');
            resultsContainer.style.display = 'block'; // Show the results box
        } else {
            resultsContainer.innerHTML = "<div>No results found for your search. Please try a different keyword.</div>";
            resultsContainer.style.display = 'block'; // Show the results box even if no results are found
        }
    }

    // Helper function to flatten the adviceData structure
    function flattenAdviceData(data) {
        const flattened = {};

        function recurse(obj, parentCategory = '') {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    recurse(obj[key], parentCategory || key);
                } else {
                    flattened[key.toLowerCase()] = { category: parentCategory, advice: obj[key] };
                }
            }
        }

        recurse(data);
        return flattened;
    }

    // Call the autocomplete initialization function
    initializeAutocomplete();

    // Dynamically populate the "Keywords Section"
    const keywordsSection = document.getElementById('keywordsSection');

    if (keywordsSection) {
        Object.keys(adviceData).forEach(category => {
            // Create a heading for each category
            const categoryHeading = document.createElement('h3');
            categoryHeading.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the category name
            keywordsSection.appendChild(categoryHeading);

            // Create a list for the keywords in this category
            const keywordList = document.createElement('ul');
            keywordList.style.listStyle = 'none';
            keywordList.style.padding = '0';
            keywordList.style.textAlign = 'center';

            // Add each keyword to the list
            Object.keys(adviceData[category]).forEach(keyword => {
                const listItem = document.createElement('li');
                listItem.textContent = keyword;
                keywordList.appendChild(listItem);
            });

            keywordsSection.appendChild(keywordList);
        });
    }

    populateKeywordsSection();
});

// Function to dynamically show meditation details
function showMeditationDetails() {
    const meditationText = document.getElementById('meditationtext');
    if (meditationText) {
        meditationText.textContent = "Meditation helps improve daily life by reducing stress, enhancing focus, and fostering emotional resilience. It allows individuals to approach challenges with a calm and clear mind.";
        meditationText.style.display = 'block'; // Ensure the text is visible
    }
}

// Function to initialize autocomplete suggestions
function initializeAutocomplete() {
    const searchBar = document.getElementById('searchBar');
    const suggestionsContainer = document.getElementById('suggestions');

    if (!searchBar || !suggestionsContainer) {
        console.error('Search bar or suggestions container not found in the DOM.');
        return;
    }

    // Collect all keywords with their categories
    const flattenedData = flattenAdviceData(adviceData);
    const keywordsWithCategories = Object.entries(flattenedData).map(([keyword, { category }]) => ({
        keyword,
        category,
    }));

    // Add event listener for input in the search bar
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions

        if (query.length >= 2) { // Show suggestions only if the input has at least 2 characters
            // Filter keywords based on the user's input
            const filteredKeywords = keywordsWithCategories.filter(({ keyword }) =>
                keyword.startsWith(query)
            );

            if (filteredKeywords.length > 0) {
                suggestionsContainer.style.display = 'block'; // Show suggestions container
                filteredKeywords.forEach(({ keyword, category }) => {
                    const suggestion = document.createElement('div');
                    suggestion.innerHTML = `<strong>${keyword}</strong> (${category})`; // Display keyword with its category
                    suggestion.style.padding = '8px';
                    suggestion.style.cursor = 'pointer';
                    suggestion.addEventListener('click', () => {
                        searchBar.value = keyword; // Set the search bar value to the selected keyword
                        suggestionsContainer.style.display = 'none'; // Hide suggestions
                        searchAdvice(keyword); // Pass the selected keyword to the search function
                    });
                    suggestionsContainer.appendChild(suggestion);
                });
            } else {
                suggestionsContainer.style.display = 'none'; // Hide suggestions if no matches
            }
        } else {
            suggestionsContainer.style.display = 'none'; // Hide suggestions if input is less than 2 characters
        }
    });

    // Hide suggestions when clicking outside the search bar or suggestions container
    document.addEventListener('click', (event) => {
        if (!suggestionsContainer.contains(event.target) && event.target !== searchBar) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// Function to populate the Keywords by Category section
function populateKeywordsSection() {
    const keywordsSection = document.getElementById('keywordsSection');
    if (!keywordsSection) return;

    const flattenedData = flattenAdviceData(adviceData);

    // Group keywords by category
    const categories = {};
    for (const [keyword, { category }] of Object.entries(flattenedData)) {
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(keyword);
    }

    // Generate HTML for each category
    let html = '<h2>All Keywords by Category</h2>';
    for (const [category, keywords] of Object.entries(categories)) {
        html += `
            <div style="margin-bottom: 20px;">
                <h3 style="color: #007BFF;">${category.toUpperCase()}</h3>
                <ul style="list-style: none; padding: 0;">
                    ${keywords
                        .map(
                            (keyword) =>
                                `<li style="margin-bottom: 5px; font-size: 16px; color: #333;">${keyword}</li>`
                        )
                        .join('')}
                </ul>
            </div>
        `;
    }

    // Add the generated HTML to the section
    keywordsSection.innerHTML = html;
}

// Helper function to flatten the adviceData structure
function flattenAdviceData(data) {
    const flattened = {};

    function recurse(obj, parentCategory = '') {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                recurse(obj[key], parentCategory || key);
            } else {
                flattened[key.toLowerCase()] = { category: parentCategory, advice: obj[key] };
            }
        }
    }

    recurse(data);
    return flattened;
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateKeywordsSection();
});

// Typing animation for the H1 heading
document.addEventListener('DOMContentLoaded', () => {
    const headingText = "Your Wellness Hub. Search Away."; // The text to be typed
    const headingElement = document.querySelector('header h1'); // Target the header's H1 element
    let index = 0;

    // Clear the text content before starting the animation
    headingElement.textContent = "";

    function typeLetter() {
        if (index < headingText.length) {
            headingElement.textContent += headingText.charAt(index); // Add one letter at a time
            index++;
            setTimeout(typeLetter, 100); // Adjust typing speed (100ms per letter for slower typing)
        }
    }

    typeLetter(); // Start the typing animation
});



const resultsContainer = document.getElementById('results');
resultsContainer.style.backgroundColor = '#fff'; // White background
resultsContainer.style.color = '#333'; // Dark text for readability
resultsContainer.style.padding = '10px'; // Add padding for spacing
resultsContainer.style.border = '1px solid #ddd'; // Add a light border
resultsContainer.style.borderRadius = '8px'; // Rounded corners
resultsContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Subtle shadow for a modern look
resultsContainer.style.marginTop = '10px'; // Add spacing below the search bar
resultsContainer.style.display = 'block'; // Show the results container
