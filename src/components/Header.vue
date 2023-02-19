<template>
    <div class="header">
        <div class="main-title">

            <span class="material-symbols-outlined task-icon">task_alt</span>
            <h1>Task Tracker</h1>
        </div>
        <button class="menu-btn">
            <span class="material-symbols-outlined menu-icon">menu</span>
        </button>
        
    </div>
</template>


<style scoped>
.header {
    background-color: #489d46;
    color: #2e2e2e;
    height: 15vh;
    padding: 10px 40px;
    display: flex;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: space-between;

}

.main-title {
    display: flex;
    align-items: center;
    gap: 10px;
}

.task-icon, .menu-icon {
    font-size: 2rem;
    font-weight: 600;
}

button {
    border: none;
    background-color: transparent;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.menu-btn:hover {
    background-color: rgba(128, 128, 128, 0.25);
    border-radius: 7px;

}

</style>