import swal from 'sweetalert2';

export const showOnlyMessageSwal = (title, img) => {
  const isMobile = window.innerWidth <= 800;

  const swalOptions = {
    title: title,
    imageUrl: img,
    imageWidth: '100px', // Adjust image width as needed
    imageHeight: '100px', // Adjust image height as needed
    imageAlt: 'Image', // Alt text for the image
    showCancelButton: false,
    showConfirmButton: false,
    customClass: {
      popup: `${isMobile ? 'swal-mobile' : ''}`,
    },
    fontSize: isMobile ? '12px' : undefined,
  };

  if (isMobile) {
    swalOptions.width = '55%';
  }

  const swalInstance = swal.fire(swalOptions);

  // Add inline styles for image
  const imageElement = document.querySelector('.swal-image');
  if (imageElement) {
    imageElement.style.borderRadius = '50%'; // Apply border-radius: 50%
    imageElement.style.objectFit = 'cover'; // Apply object-fit: cover
  }

  setTimeout(() => {
    swalInstance.close();
  }, 500);
};
