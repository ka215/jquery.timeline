## _init()

?: this._isInitialized || this._isCompleted -> return

showLoader() [:public]

_calcVars()
    _getPluggableDatetime()
        getHigherScale()
        
        verifyScale()
        
        _filterScaleKeyName()
        
        getCorrectDatetime()
    
    _getPluggableRows()
    
    verifyScale()
        diffDate()

?: ! _verifyMaxRenderableRange() -> error
    _filterScaleKeyName()

_renderView()
    _createHeadline()
    
    _createEventContainer()
    
    this._createRuler()
        _filterVariableScale() 
        
        _getGridsPerScale() [:should merge to _filterVariableScale()]
        
        _createRulerContent()
            getLocaleString()
            
            strWidth()
    
    _createSideIndex()
    
    _createFooter()

?: ! this._isCached
&-> _loadEvent()
    _getPluggableParams()
    
    _registerEventData()
        generateUniqueID()
        
        _getCoordinateX()
            _getPluggableDatetime()
        
        getLocaleString()
    
    _saveToCache()

?: this._isCached
&-> _placeEvent()
    _loadToCache()
    
    _createEventNode()
        hexToRgbA()
        
        _getPointerSize()
    
    _drawRelationLine()
        _getPointerSize()
    
    sleep() [:should be deprecatedH]
    
    hideLoader() [:public]

(Binding events)

(this._isCompleted = true)

alignment() [:public]

?: ! this._isInitialized
&-> (Binding Event.INITIALIZED)


## initialized() [:public]


## destroy() [:public]

_removeCache()


## show() [:public]


## hide() [:public]


## dateback() [:public]

_verifyScale()

reload()


## dateforth() [:public]

_verifyScale()

reload()


## alignment() [:public]

_mapPlacedEvents()
    _loadToCache()

compareValues()

_getCoordinateX()


## addEvent() [:public]

compareValues()

_registerEventData()

_saveToCache()

_placeEvent()


## removeEvent() [:public]

_getCoordinateX()

_saveToCache()

_placeEvent()


## updateEvent() [:public]

_registerEventData()

_saveToCache()

_placeEvent()


## reload() [:public]

mergeDeep()

_verifyMaxRenderableRange()

_renderView()

_loadToCache()

_registerEventData()

_saveToCache()

_loadEvent()

_placeEvent()


## openEvent() [:public]

_loadToCache()


## zoomScale() [:public]

reload()


## showLoader() [:public]


## hideLoader() [:public]


- - -

## Utility methods (unittestable)

### is_empty()

### is_Object()

### mergeDeep()

### is_iterable()

### toIterableObject()

### sleep()

### supplement()

### generateUniqueID()

### numRound()

### hexToRgbA()

### getCorrectDatetime() [:must test]

### getWeek() [:must test]

### diffDate() [:must test]

### getHigherScale() [:must test]

### getLocaleString() [:must test]

### strWidth()

### compareValues()

### validateString()

### validateNumeric()

### validateBoolean()

### validateObject()

### validateArray()


