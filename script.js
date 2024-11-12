// Function to calculate the number of days between two dates
function calculateDateRange() {
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    document.getElementById("date-range-result").textContent = 
        `Days between: ${Math.abs(differenceInDays)} days`;
}

// Function to add a specified number of days to a start date
function calculateEndDate() {
    const startDate = new Date(document.getElementById("start-date-add").value);
    const daysToAdd = parseInt(document.getElementById("days-to-add").value, 10);
    startDate.setDate(startDate.getDate() + daysToAdd);

    document.getElementById("days-addition-result").textContent = 
        `End date after adding days: ${startDate.toDateString()}`;
}

// Functions for Multi-Scenario Leave Tracker
let leavePeriods = [];

function addLeavePeriod() {
    const leavePeriodContainer = document.getElementById("leave-periods");

    const periodDiv = document.createElement("div");
    periodDiv.classList.add("leave-period");

    const startInput = document.createElement("input");
    startInput.type = "date";
    startInput.placeholder = "Start Date";
    startInput.classList.add("leave-start");

    const endInput = document.createElement("input");
    endInput.type = "date";
    endInput.placeholder = "End Date";
    endInput.classList.add("leave-end");

    periodDiv.appendChild(startInput);
    periodDiv.appendChild(endInput);
    leavePeriodContainer.appendChild(periodDiv);
}

function calculateLeaveTotal() {
    const leavePeriodsDivs = document.querySelectorAll(".leave-period");
    let totalLeaveDays = 0;

    leavePeriodsDivs.forEach((periodDiv) => {
        const start = new Date(periodDiv.querySelector(".leave-start").value);
        const end = new Date(periodDiv.querySelector(".leave-end").value);
        const days = (end - start) / (1000 * 3600 * 24);
        totalLeaveDays += days;
    });

    document.getElementById("leave-total-result").textContent = 
        `Total leave days: ${Math.abs(totalLeaveDays)} days`;
}
