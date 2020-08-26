const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtnPrev3 = document.querySelector("#btn-3-prev")
const formBtnNext3 = document.querySelector("#btn-3-next")
const formBtnPrev4 = document.querySelector("#btn-4-prev")
const formBtnNext4 = document.querySelector("#btn-4-next")
const formBtnPrev5 = document.querySelector("#btn-5-prev")
const formBtnNext5 = document.querySelector("#btn-5-next")
const formBtnPrev6 = document.querySelector("#btn-6-prev")
const formBtnNext6 = document.querySelector("#btn-6-next")
const formBtnPrev7 = document.querySelector("#btn-7-prev")
const formBtnNext7 = document.querySelector("#btn-7-next")
const formBtnPrev8 = document.querySelector("#btn-8-prev")
const formBtnNext8 = document.querySelector("#btn-8-next")
const formBtnPrev9 = document.querySelector("#btn-9-prev")
const formBtnNext9 = document.querySelector("#btn-9-next")
const formBtnPrev10 = document.querySelector("#btn-10-prev")
const formBtn10 = document.querySelector("#btn-10")

// Button listener of form 1
formBtn1.addEventListener("click", function(e) {
    gotoNextForm(formBtn1, formBtnNext2, 1, 2)
    e.preventDefault()
  })
  
  // Previous button listener of form 2
  formBtnPrev2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn1, 2, 1)
    e.preventDefault()
  })
  // Next button listener of form 2
  formBtnNext2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtnPrev3, 2, 3)
    e.preventDefault()
  })

  // Previous button listener of form 3
  formBtnPrev3.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev3, formBtnNext2, 3, 2)
    e.preventDefault()
  })
  // Next button listener of form 3
  formBtnNext3.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext3, formBtnNext4, 3, 4)
    e.preventDefault()
  })

  // Previous button listener of form 4
  formBtnPrev4.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev4, formBtnNext3, 4, 3)
    e.preventDefault()
  })
  // Next button listener of form 4
  formBtnNext4.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext4, formBtnNext5, 4, 5)
    e.preventDefault()
  })

  // Previous button listener of form 5
  formBtnPrev5.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev5, formBtnNext4, 5, 4)
    e.preventDefault()
  })
  // Next button listener of form 5
  formBtnNext5.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext5, formBtnNext6, 5, 6)
    e.preventDefault()
  })

  // Previous button listener of form 6
  formBtnPrev6.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev6, formBtnNext5, 6, 5)
    e.preventDefault()
  })
  // Next button listener of form 6
  formBtnNext6.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext6, formBtnNext7, 6, 7)
    e.preventDefault()
  })

  // Previous button listener of form 7
  formBtnPrev7.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev7, formBtnNext6, 7, 6)
    e.preventDefault()
  })
  // Next button listener of form 7
  formBtnNext7.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext7, formBtnNext8, 7, 8)
    e.preventDefault()
  })

  // Previous button listener of form 8
  formBtnPrev8.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev8, formBtnNext7, 8, 7)
    e.preventDefault()
  })
  // Next button listener of form 8
  formBtnNext8.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext8, formBtnNext9, 8, 9)
    e.preventDefault()
  })

  // Previous button listener of form 9
  formBtnPrev9.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev9, formBtnNext8, 9, 8)
    e.preventDefault()
  })
  // Next button listener of form 9
  formBtnNext9.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext9, formBtn10, 9, 10)
    e.preventDefault()
  })

  // Previous button listener of form 10
  formBtnPrev10.addEventListener("click", function(e) {
    gotoNextForm(formBtnPrev10, formBtnNext9, 10, 9)
    e.preventDefault()
  })
  // Button listener of form 10
  formBtn10.addEventListener("click", function(e) {
    document.querySelector(`.step--10`).classList.remove("step-active")
    document.querySelector(`.step--11`).classList.add("step-active")
    formBtn10.parentElement.style.display = "none"
    document.querySelector(".form--message").innerHTML = `
     <h1 class="form--message-text">Your account is successfully created </h1>
     `
    e.preventDefault()
  })

  const gotoNextForm = (prev, next, stepPrev, stepNext) => {
    // Get form through the button
    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)
    // Add active/inactive classes to both previous and next form
    nextForm.classList.add("form-active")
    nextForm.classList.add("form-active-animate")
    prevForm.classList.add("form-inactive")
    // Change the active step element
    prevStep.classList.remove("step-active")
    nextStep.classList.add("step-active")
    // Remove active/inactive classes to both previous an next form
    setTimeout(() => {
      prevForm.classList.remove("form-active")
      prevForm.classList.remove("form-inactive")
      nextForm.classList.remove("form-active-animate")
    }, 1000)
  }