# Counter_App
## Date: 10-07-2025
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.

## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <section class="counter-box">
    <h2>Write your message</h2>
    
    <label for="message">Message:</label><br />
    <textarea id="message" rows="6" cols="40" maxlength="100"></textarea>
    
    <p id="charCount">0 / 100</p>
  </section>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.counter-box {
  background-color: #ffffff;
  padding: 40px 50px;
  border: 2px solid #a3d5a3;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

h2 {
 
  color: #2f4f4f;
  font-size: 24px;
}

textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #fdfdfd;
  border: 2px solid #dcdcdc;
  border-radius: 8px;
}

#charCount {
  margin-top: 12px;
  font-weight: 600;
  color: #333;
  font-size: 15px;
}
```

## JS code:
```
const textarea = document.getElementById("message");
const counter = document.getElementById("charCount");
const max = 100;

textarea.addEventListener("input", function () {
  const len = textarea.value.length;
  counter.textContent = len + " / " + max;

  if (len > max) {
    counter.style.color = "red";
  } else if (len >= 90) {
    counter.style.color = "orange";
  } else {
    counter.style.color = "#444";
  }
});
```

## Output:
<img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/e7701d7c-bea8-4674-8d58-7544c84e1524" />

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
