## Librey Instances Viewer

This script allows you to view Librey instance URLs directly in your terminal. It's a convenient tool for quickly accessing a list of Librey instances.

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.

### Installation

1. **Clone the Repository:**

```bash
   git clone <repository-url>
```

2. Navigate to the Repository Folder:

```bash
cd path/to/repository
```

### Usage

1. Run the script:

```bash
node librey-instances.js instances
```

2. Sample Output:

```perl
https://search.ahwx.org/
https://search2.ahwx.org/
https://search3.ahwx.org/
// ... rest of the instances
```

_Note: The provided HTML file does not work due to CORS restrictions. You can use the above script to get the list of instances in your terminal._

#### Creating an Alias (Optional)

For convenience, especially if you are frequently using this script, you can create an alias on macOS or Linux:

Copy the Script to a Custom Directory:

Create a directory, if it doesn't exist, for your custom scripts. For example, ~/local/bin:

```bash
mkdir -p ~/local/bin
```

Copy the librey-instances.js script to this directory:

```bash
cp path/to/librey-instances.js ~/local/bin/
```

Make the Script Executable:

Change the script's permissions to make it executable:

```bash
chmod +x ~/local/bin/librey-instances.js
```

Add a Shebang Line:

Edit the librey-instances.js file to start with the following shebang line:

```javascript
#!/usr/bin/env node
```

Create the Alias:

Edit your .bashrc or .bash_profile file to include the alias. Add the following line:

```bash
alias showlibrey="~/local/bin/librey-instances.js"
```

After editing, apply the changes by either restarting the terminal or sourcing your profile:

```bash
source ~/.bashrc # Or source ~/.bash_profile
```

Using the Alias:

Now, you can run the script from anywhere in your terminal using the alias:

```bash
showlibrey
```

This setup will enable you to quickly and easily view Librey instances from the terminal.

## Contact

For additional queries or suggestions, feel free to contact ktleary@gmail.com
