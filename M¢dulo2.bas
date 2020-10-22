Attribute VB_Name = "Módulo2"
Rem  *****  BASIC  *****
Function PromPer(valuess As Range, percent As Range)
        
        Dim result As Double
        index = 1
        percentI = 0
        
        For Each valor In valuess
                
                result = result + valor.Value * (percent.Cells(index) / 100)
                index = index + 1
                
                
        Next
        
        PromPer = result
            
End Function

