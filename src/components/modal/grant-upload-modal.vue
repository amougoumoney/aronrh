<template>
    <div
      class="modal fade"
      id="grantUploadModal"
      tabindex="-1"
      aria-labelledby="grantUploadModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="grantUploadModalLabel">Upload Grant Files</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="grantFile" class="form-label">Select File</label>
                <input type="file" class="form-control" id="grantFile" @change="handleFileChange" required />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" :disabled="isUploading">
                <span
                  v-if="isUploading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { grantService } from '@/services/grant.service';
  import bootstrap from 'bootstrap';

  export default {
    name: 'GrantUploadModal',
    data() {
      return {
        file: null,
        description: '',
        isUploading: false,
      };
    },
    methods: {
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      async handleSubmit() {
        if (!this.file) {
          alert('Please select a file to upload.');
          return;
        }
  
        // Create FormData and append file and description
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('description', this.description);
  
        this.isUploading = true;
        try {
          // Use grantService to perform the file upload
          const data = await grantService.uploadGrantFile(formData);
          alert('File uploaded successfully!');
          this.resetForm();
          this.$emit('upload-success', data);
  
          // Close the modal using Bootstrap's Modal API
          const modalElement = document.getElementById('grantUploadModal');
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          alert('An error occurred while uploading the file.');
        } finally {
          this.isUploading = false;
        }
      },
      resetForm() {
        this.file = null;
        this.description = '';
        const fileInput = document.getElementById('grantFile');
        if (fileInput) {
          fileInput.value = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-content {
    padding: 20px;
  }
  </style>
  