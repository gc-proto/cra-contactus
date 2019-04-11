# Find an address instructions
The address finder results are based on 3 JSON data files in the Data folder in this folder. 
Those files are independepent from each other, but together provide the result. 
1. addresscodes - has each mailing address in 3 lines, with an addresscode to identify the address
2. treatments - each line in the treatments file specifies the addresscodes by region for a particular treatment. 
  * The column called FIXED holds an addresscode for addresses/forms that are sent to only one address regardless of region - if the treatment requires different addresses by region, then the FIXED column is empty
  * The regions match provinces in the Address finder - 
    * the Prairies includes Manitoba, Saskatchewan, Alberta and North West Territories
    * Ontario region covers Ontario and Nunavut
    * Pacific region covers BC and Yukon
    * Atlantic region covers New Brunswick, Nova Scotia, PEI, Newfoundland Labrador
  * The convention we adopted for Fixed treatments is to name the treatment code identically to the addresscode for that fixed treatment
3. forms - the forms file was originally created from the data table on the site at https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html
  * essentially the only change to that file was to add a new column labelled 'tmt' for the treatment of that form - only the first 2 columns of the data table are used in the JSON file
  
The JSON files are created from an Excel CSV file with three tabs -  one tab for each of the JSON files. 
* March 8th data is in an Excel CSV file (get the most recent version from @nnekanagbo at CRA )
* There are 3 tabs in the file, one for each JSON data file. 
* To update the data anytime, make your edits to the Excel file (or into the Google doc)  via this site: 
  * https://csvjson.com/csv2json
  * Change the Options on top right: deselect parse numbers, deselect parse JSON, select hash
  * Select the entire first two columns of the Forms file and copy and paste into the Converter paste panel - for the other files, select all then copy and paste
  * Click convert, then click copy and paste the new JSON into the relevant file. 
  * which file to paste into depends on what you changed - if you changed only the forms file, and didn't need to add new treatments, just change that one
  * if you added a new treatment, and applied that treatment to a form in the form file, and added a new address to the address file, then do all three

  
  
