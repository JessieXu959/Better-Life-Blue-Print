function setActiveStyleSheet(styleName) {
var bodyElement = document.body;
bodyElement.classList.remove('large-contrast');
if (styleName === 'large') {
    bodyElement.classList.add('large-contrast');
}
}

function showConfirmationSaved() {
alert("Saved sucessfuly!");
}


function showConfirmation() {

    alert("Thank you for your feedback!");
}


function openEmailClient() {
    
    var recipient = 'xujessie959@gmail.com';

   
    var subject = 'Feedback';
    var body = 'Hello, I want to provide feedback.';


    var mailtoUrl = 'mailto:' + recipient +
                    '?subject=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent(body);

  
    window.location.href = mailtoUrl;
}
