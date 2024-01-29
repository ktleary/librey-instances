### Librey Instances

View librey instances in your terminal.

Dependencies:

- requires node 18+ for fetch

Installation:

- Clone this repo

Run:

```bash
node librey-instances.js instances
```

Sample Output:

https://search.ahwx.org/  
https://search2.ahwx.org/  
https://search3.ahwx.org/  
https://ly.owo.si/  
https://librey.org/  
https://search.davidovski.xyz/  
https://glass.prpl.wtf  
https://librex.uk.to/  
https://librey.ix.tc/  
https://search.funami.tech/  
https://librex.retro-hax.net/  
https://librex.nohost.network/  
https://search.pabloferreiro.es/  
https://librey.baczek.me/  
https://lx.benike.me/  
https://search.seitan-ayoub.lol/  
https://librey.myroware.net/  
https://librey.nezumi.party/  
https://search.zeroish.xyz/  
https://search.zeroish.xyz/

Note: The provided HTML file does not work due to CORS restrictions. You can use the above script to get the list of instances in your terminal.

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
