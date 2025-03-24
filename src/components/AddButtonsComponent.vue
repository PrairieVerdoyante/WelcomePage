<template>
  <div class="add-buttons-container">
    <h3>Add a New Button</h3>
    <form @submit.prevent="handleAddButton">
      <div class="form-group">
        <label for="name">Button Name:</label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Enter button name"
          required
        />
      </div>
      <div class="form-group">
        <label for="link">Button Link:</label>
        <input
          id="link"
          v-model="link"
          type="url"
          placeholder="Enter button link"
          required
        />
      </div>
      <button type="submit" class="add-button">Add Button</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { buttons, addButton } from '../utils/mainpage.js';

const name = ref('');
const link = ref('');

// Load buttons from localStorage on app startup
onMounted(() => {
  const savedButtons = JSON.parse(localStorage.getItem('buttons'));
  if (savedButtons) {
    buttons.value = savedButtons;
  }
});

const handleAddButton = () => {
  if (name.value && link.value) {
    addButton(name.value, link.value);
    // Save updated buttons to localStorage
    localStorage.setItem('buttons', JSON.stringify(buttons.value));
    name.value = '';
    link.value = '';
    alert('Button added successfully!');
  } else {
    alert('Please fill in all fields.');
  }
};
</script>

<style scoped>
.add-buttons-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.add-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>