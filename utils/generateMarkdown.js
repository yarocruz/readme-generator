function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${data.description}

  This is a description of the project. 

  ```
  JSON.stringify()
    ```

  ## ${data.tableOfContents} 
  
  ## ${data.installation}

  ## ${data.usage}

  ## ${data.license} 

  ## ${data.contributing}

  ## ${data.tests}

  ## Questions?
  ![alt text](${data.avatar_url})
  `;
}

module.exports = generateMarkdown;