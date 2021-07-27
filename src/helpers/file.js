/**
 * Matches the filename part in Content-Disposition header
 * @example attachment;filename="Balance_1_1381_20190128_17175738_153.pdf"
 * @matches "Balance_1_1381_20190128_17175738_153.pdf"
 */
// const filenameRegex = /(?:[A-Za-z])(\w|-)+(?:\.[a-z]+)/; // OBSOLETE

export const downloadFile = (data, filename, type = 'application/pdf') => {
  // Create a new Blob object using the
  // response data of the onload object
  // const blob = new Blob([data], { type });
  // // Create a link element, hide it, direct
  // // it towards the blob, and then 'click' it programatically
  // const a = document.createElement('a');
  // a.style = 'display: none';
  // document.body.appendChild(a);
  // // Create a DOMString representing the blob
  // // and point the link element towards it
  // const url = window.URL.createObjectURL(blob);
  // a.href = url;
  // a.download = filename;
  // // programatically click the link to trigger the download
  // a.click();
  // // release the reference to the file by revoking the Object URL
  // setTimeout(() => {
  //   // For Firefox it is necessary to delay revoking the ObjectURL
  //   window.URL.revokeObjectURL(url);
  //   document.body.removeChild(a);
  // }, 100);
};

export const printOrDownload = (data, type, fileName) => {
  // if (type === 'print') {
  //   const blob = new Blob([data], { type: 'application/pdf' });
  //   const url = window.URL.createObjectURL(blob);

  //   printJS({
  //     printable: url,
  //     showModal: true,
  //     onError: () => {
  //       downloadFile(data, fileName);
  //     }
  //   });

  //   // release the reference to the file by revoking the Object URL
  //   setTimeout(() => {
  //     // For Firefox it is necessary to delay revoking the ObjectURL
  //     window.URL.revokeObjectURL(url);
  //   }, 100);
  // } else {
  //   downloadFile(data, fileName);
  // }
};

